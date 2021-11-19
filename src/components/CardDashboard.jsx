import React, { useContext, useState } from 'react'
import { Card } from '../components/Card';
import { Link, Route, Redirect } from 'react-router-dom';
import { ContextApi } from '../context/contextApi'

import '../styles/dashboard.css';

export const CardDashboard = () => {
  const { objUser } = useContext(ContextApi)

  return (
    <div>
    
      <h1>{objUser.user}</h1>
      <hr/>
      {objUser.auth 
        ?
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
        : () => window.location.href = "http://localhost:3000/"
        
      }
    </div> 
  )
}




{/* // <section className="dashboard">
//   <div className="deadline">

//     <Link to="attendant">
//       <Card color="#538A46" width="300px" height="200px">
//         <span>30</span> <br/>
//         Solicitações
//       </Card>
//     </Link>

//     <Card color="#EBBA31" width="300px" height="200px">
//       <span>20</span> <br/>
//       Solicitações
//     </Card>
//     <Card color="#AE191C" width="300px" height="200px">
//       <span>100</span> <br/>
//       Solicitações
//     </Card>
//   </div>
// </section> */}


