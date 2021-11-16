
import React from 'react'

import { Typography } from '@mui/material'
import { FormLogin } from '../components/FormLogin'
import { CardForm } from '../components/CardForm'



export function Login() {
  return (
		
		<CardForm bgColor="#FFFFFF" width="500px" height="350px" >
			<Typography 
				align='center' 
				variant='h5' 
				sx={{ color: 'blue', marginBottom: 2 }}
			>
				Login | ACAL
			</Typography>
			
			<FormLogin />
		</CardForm>	
	)	
}
