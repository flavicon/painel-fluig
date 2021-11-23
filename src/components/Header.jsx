import { Link } from 'react-router-dom';

import logo from '../assets/logo_acal.svg';
import timeIcon from '../assets/group.svg';
import WidgetsIcon from '@mui/icons-material/Widgets';
import LogoutIcon from '@mui/icons-material/Logout';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import '../styles/header.css';
import { useEffect, useState } from 'react';

export function Header() {

  const [ userLogin, setUserlogin ] = useState(localStorage.getItem('user') || '')
  const [ token, useToken ] = useState(localStorage.getItem('token'))

  const verifyToken = () => {
    return token == 'null' ? null : alert("VocÊ precisa está logado para realizar logout!")
  }

	return (
		<header className="navbar">
			<div className="logo">
				<img src={logo} alt="Acal Home Center" />
			</div>
			<nav className="nav">
				<h1>Acompanhamento Fluig de Suporte</h1>
			</nav>

      <div className="time">
				<Link to="dashboard">
					<button className="button">
            <WidgetsIcon color="primary" sx={{ fontSize: 32 }} />
					</button>
				</Link>
			</div>

			<div className="time">
				<Link to="atendimento">
					<button className="button">
						{/* <img src={timeIcon} alt="Group icon" /> */}
            <ViewModuleIcon color="primary" sx={{ fontSize: 40 }} />
					</button>
				</Link>
			</div>

			<div className="time" onClick={() => verifyToken}>
				<Link to="logout" >
					<button className="button-login" type="submit">
						<LogoutIcon color="primary" sx={{ fontSize: 40 }} />
					</button>
				</Link>
			</div>

      <div className="time">
			  <h3 style={{color: "blue"}}>{userLogin}</h3>
			</div>

		</header>
	)
}
