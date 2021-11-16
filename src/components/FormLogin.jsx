import React, { useState } from 'react'
import { TextField, Button, Stack } from '@mui/material'

export function FormLogin() {
  const [ login, setLogin ] = useState("")
  const [ senha, setSenha ] = useState("")


  const enviarDados = async () => {
    await fetch('http://localhost:8080/auth',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        login,
        senha
      })
    })
    .then(res => res.json())
    .then(data => {
      
      return  ( data.err === undefined && data.token !== ""
                ? ( localStorage.setItem('token', data.token), 
                    alert("Logado com sucesso! Token Criado!!"),
                    window.location.href = "http://localhost:3000"
                  ) 
                : alert(data.err)
              )
    })
    .catch(err => console.log(err.err))
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
            color="error"
            variant="contained"
            size="small"
          >
            Cancelar
          </Button>
          <Button 
            type="submit"
            size="large"
            sx={{ backgroundColor: '#0d47a1'}}
            // color="primary"
            variant="contained"
          >
            Logar
          </Button>
        </Stack>
      </form>
  )
}