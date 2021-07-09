import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Attendant } from './pages/Attendant';
import { Dashboard } from './pages/Dashboard';
import { Time } from './pages/Time';
import { FluigsGeral } from './pages/FluigsGeral';
import './styles/global.css';

function App() {
	return (
		<Router>
			<div className="container">
				<Header />
				<Switch>
					<Route path="/:id">
						<FluigsGeral />
					</Route>
					<Route path="/atendimento">
						<Time />
					</Route>
					<Route path="/:id">
						<Attendant />
					</Route>
					<Route exact path="/">
						<Dashboard />
					</Route>
				</Switch>
			</div>
		</Router>
  	);
}

export default App;
