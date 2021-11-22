import React from 'react'
import { Card } from '../components/Card';
import { Link } from 'react-router-dom';

import '../styles/dashboard.css';

export const CardDashboard = (props) => {

  return (
    <div>
      <h3>Rafael</h3>
      <hr/>
      <section className="dashboard">
        <div className="deadline">

          <Link to="attendant">
            <Card color="#538A46" width="300px" height="200px">
              <span>30</span> <br/>
              Solicitações
            </Card>
          </Link>

          <Card color="#EBBA31" width="300px" height="200px">
            <span>20</span> <br/>
            Solicitações
          </Card>
          <Card color="#AE191C" width="300px" height="200px">
            <span>100</span> <br/>
            Solicitações
          </Card>
        </div>
      </section>
    </div> 
  )
}
