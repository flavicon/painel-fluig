import React from 'react';
// import { Card } from '../components/Card';
// import { Link } from 'react-router-dom';
// import { ApiContext } from '../context/contextApi'
// import { ApiContexthook } from '../context/contextApi' 
import { CardDashboard } from '../components/CardDashboard'
import '../styles/dashboard.css';

function Dashboard() {

	console.log("Fora - Disparou")

	return (
		<CardDashboard />
	)
}

export {
	Dashboard 
}