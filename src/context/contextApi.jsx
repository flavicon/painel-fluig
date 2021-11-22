import React, { createContext, useState, useEffect} from 'react'
import useSwr from 'swr'
export const ContextApi = createContext({})

export function ContextProvider({ children }){
  // const [ objUser, setObjUser ] = useState([])
  const url = "http://localhost:8080/dashboard"
  const [ token , setToken ] = useState(localStorage.getItem('token'))

  const fetcher = (...args) => fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`,
      }
    })
    .then(res => res.json())

  const { data, error } = useSwr(url, fetcher)
  
  return (
    <ContextApi.Provider
      value={{ data, error }}
    >
      { children }
    </ContextApi.Provider>
  )
} 



// useEffect( async () => {

//   await fetch("http://localhost:8080/dashboard", {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'authorization': `Bearer ${token}`,
//     }
//   })
//   .then(result => result.json())
//   .then(data => {
//     console.log("Fetch: ", data)
//     setObjUser(data)
//   })
//   .catch(err => {
//     console.log("Erro, Token invalid! ", err.message)
//     setObjUser([{err: "error", auth: false}])
//   })
// }, [])