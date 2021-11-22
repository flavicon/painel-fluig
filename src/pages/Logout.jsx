import react, { useState } from 'react'
import { Login } from '../pages/Login'


export const Logout = () => {
  const [ token, useToken ] = useState(localStorage.getItem('token'))

  const result = fetch("http://localhost:8080/logout", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': `Bearer ${token}`
    }
  })
  .then(res => {
    localStorage.removeItem('auth')
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    return res.json()
  }) 

  if (!result.auth) {
    return (
      <>
        <h1>logging out...</h1>
        {setTimeout(() => {
          // <Login />
          window.location.href = "/"
        }, 300)}
      </>
    )
  }

  return (
    <>
      <h1>Auth is true</h1>
      {setTimeout(() => {
        // <Login />
        window.location.href = "/"
      }, 2000)}
    </>
  )
}