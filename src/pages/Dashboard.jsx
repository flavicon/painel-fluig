import { Card } from '../components/Card';

import '../styles/dashboard.css';

export function Dashboard() {
	return (
		<>
		<section className="dashboard">
			<div className="deadline">
				<Card color="#538A46">
					<span>30</span> <br/>
					Solicitações
				</Card>
				<Card color="#EBBA31">
					<span>20</span> <br/>
					Solicitações
				</Card>
				<Card color="#AE191C">
					<span>100</span> <br/>
					Solicitações
				</Card>
			</div>
		</section>
		<section className="description">
			<div className="legend">
				<div className="legendChild">
					<div className="onTime"></div>
					<p>Dentro do prazo</p>
				</div>

				<div className="legendChild">
					<div className="onLimit"></div>
					<p>Proximo do prazo</p>
				</div>

				<div className="legendChild">
					<div className="late"></div>
					<p>Fora do prazo</p>
				</div>
			</div>
		</section>
		</>
	)
}
