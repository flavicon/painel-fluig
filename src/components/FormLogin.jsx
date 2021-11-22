import React, { useState } from 'react'
import { TextField, Button, Stack } from '@mui/material'

export function FormLogin() {
  const [ login, setLogin ] = useState("")
  const [ senha, setSenha ] = useState("")


  const enviarDados = async () => {
    await fetch('http://localhost:8080/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login,
        senha
      })
    })
    .then(res => res.json())
    .then(data => {
      
      return  (data.token !== "" && data.auth === true
                ? ( 
                    localStorage.setItem('token', data.token),
                    localStorage.setItem('user', data.user),
                    localStorage.setItem('auth', data.auth),
                    alert("Logado com sucesso! Token Criado!!"),
                    window.location.href = "http://localhost:3000/dashboard"
                  ) 
                : alert(data.error)
              )
    })
    .catch(err => console.log(err.error))
  }
  return (
      <form
        // action="/"
        method='POST'
        onSubmit={(e) => {
          e.preventDefault()

          enviarDados()
      }}>
       
        <TextField
          value={login}
          onChange={e=>setLogin(e.target.value)}
          sx={{ marginBottom: 3, marginTop: 3}} 
          id="standard-basic" 
          label="Login" 
          variant="standard" 
          fullWidth={true}
          required={true}
        />
        <br/>
        <TextField 
          value={senha}
          type='password'
          onChange={e=>setSenha(e.target.value)}
          sx={{ marginBottom: 3, width: "400px"}} 
          id="standard-basic" 
          label="Senha" 
          variant="standard" 
          fullWidth={true}

          required={true}
        />
        <br />

        <Stack direction="row" sx={{ marginTop: 3}} spacing={2}>
          <Button 
            type="submit"
            size="large"
            sx={{ backgroundColor: '#0d47a1', width: '100%'}}
            variant="contained"
          >
            Log in
          </Button>
        </Stack>
      </form>
  )
}