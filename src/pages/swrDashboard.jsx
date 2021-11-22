import React, { useContext, useState } from 'react';
import { CardDashboard } from '../components/CardDashboard'
// import { Route, Redirect } from 'react-router-dom'
// import { ContextApi } from '../context/contextApi'
import useSwr from 'swr'

import '../styles/dashboard.css';

/* ======================= */
let url = "http://localhost:8080/dashboard"


export function Dashboard() {
	const [ token, setToken ] = useState(localStorage.getItem('token'))

	const fetcher = (...args) => fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
	.then(res => res.json())

	const { data, error } = useSwr(url, fetcher)

	// console.log(data)

	if (!data && !error) {
		return <h1>Buscando dados do projeto...</h1>
	}

	if (error) {
		return <h1>Deu error: {error.message}</h1>
	}

	return (
		<>
			<h1>Projeto: {data.user}</h1>
		</>
	)


	// return <CardDashboard />
}