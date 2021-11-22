import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './components/Header';
import { Attendant } from './pages/Attendant';
import { Dashboard } from './pages/Dashboard';
import { Time } from './pages/Time';
import { Login } from './pages/Login';
import { FluigsGeral } from './pages/FluigsGeral';
import { ContextApi, ContextProvider } from './context/contextApi'
import './styles/global.css';
import { useContext } from 'react';

function App() {
	const { objUser } = useContext(ContextApi)


	return (
		<Router>
			<div className="container">
				
				<Header />
				
				<Switch>
						<Route exact path="/">
								<Login />
						</Route>

						<Route path="/fluig-geral">
							<FluigsGeral />
						</Route>

						<Route path="/atendimento">
							<Time />
						</Route>

						<Route path="/dashboard">
							<Dashboard />
						</Route>

						{/* <Route exact path="/dashboard">
								{ objUser.auth ? <Dashboard /> : <Login /> }
						</Route> */}
						
						{/* {objUser.auth ? (
								// <Route path="/dashboard">
									<Dashboard />
								// </Route>
							) : (
								// <Route path="/">
									<Login />
								// </Route>
							)
						} */}

							{/* {objUser.auth ? (
								<Route path="/dashboard">
									<Dashboard />
								</Route>
							) : (				
									<Login />
							)
						} */}
						
						<Route path="/attendant">
							<Attendant />
						</Route>	
				</Switch>
				
			</div>
		</Router>
  	);
}

export default App;
