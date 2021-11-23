import React, { useState } from 'react';
import useSwr from 'swr'
// import { Card } from '../components/Card';
// import { Link } from 'react-router-dom';
import { Login } from './Login';
// import { ContextApi } from '../context/contextApi'
import { CardDashboard } from '../components/CardDashboard'
import '../styles/dashboard.css';

let url = "http://localhost:8080/dashboard"

export function Dashboard() {
  const [ token ] = useState(localStorage.getItem('token'))

  const fetcher = (...args) => fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
	.then(res => res.json())

  const { data, error } = useSwr(url, fetcher)
  const rota = '/'

	if (!data && !error) {
		return <h1>Buscando dados do projeto...</h1>
	}

	if (error) {
		return <h1>Deu error: {error.message}</h1>
	}

	// if(data.auth && data.user !== "unauthorized") {
	if(data.auth) {
		return <CardDashboard data={data} />
	}

	return (
		<>
			{/* <Login /> */}
      <h2>Usuário não autorizado...</h2>
      {setTimeout(() => {

        {window.location.href = rota}
      }, 800)}
		</>
	)
}
