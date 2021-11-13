import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Attendant } from './pages/Attendant';
import { Dashboard } from './pages/Dashboard';
import { Time } from './pages/Time';
import { Login } from './pages/Login';
import { FluigsGeral } from './pages/FluigsGeral';
import './styles/global.css';

function App() {
	return (
		<Router>
			<div className="container">
				<Header />

				<Switch>
					<Route exact path="/">
							<Dashboard />
					</Route>

					<Route path="/fluig-geral">
						<FluigsGeral />
					</Route>

					<Route path="/atendimento">
						<Time />
					</Route>

					<Route path="/login">
						<Login />
					</Route>
					
					<Route path="/attendant">
						<Attendant />
					</Route>
					
					
				</Switch>
			</div>
		</Router>
  	);
}

export default App;
