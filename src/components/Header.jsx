import { Link } from 'react-router-dom';

import logo from '../assets/logo_acal.svg';
import timeIcon from '../assets/group.svg';
import '../styles/header.css';

export function Header() {
	return (
		<header className="navbar">
			<div className="logo">
				<img src={logo} alt="Acal Home Center" />
			</div>
			<nav className="nav">
				<h1>Acompanhamento Fluig de Suporte</h1>
			</nav>
			<div className="time">
				<Link to="atendimento">
					<button className="button">
						<img src={timeIcon} alt="Group icon" />
					</button>
				</Link>
			</div>
		</header>
	)
}
