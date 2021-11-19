import React, { createContext, useState, useEffect} from 'react'
export const ContextApi = createContext({})

export function ContextProvider({ children }){
  const [ objUser, setObjUser ] = useState([])
  const [ token , setToken ] = useState(localStorage.getItem('token'))

  useEffect( async () => {

    await fetch("http://localhost:8080/dashboard", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`,
      }
    })
    .then(result => result.json())
    .then(data => {
      console.log("Fetch: ", data)
      setObjUser(data)
    })
    .catch(err => {
      console.log("Erro, Token invalid! ", err.message)
      setObjUser([{err: "error", auth: false}])
    })
  }, [])
  
  return (
    <ContextApi.Provider
      value={{ objUser }}
    >
      { children }
    </ContextApi.Provider>
  )
} 
