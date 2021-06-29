//import { useParams } from "react-router-dom"
import { Card } from '../components/Card';

import avatar from '../assets/avatar.svg';

import '../styles/attendant.css';

export function Attendant() {
    //let { id } = useParams();

    return (
        <div className="painelAttendant">
            <div className="sideAvatar">
                <div className="avatarAttendant">
                    <button className="avatarIcon">
                        <img src={avatar} alt="Avatar logo" />
                    </button>
                    <p>Jose Carlos</p>
                </div>
            </div>
            <div className="listFluigs">
                <div className="cardsList">
                    <Card color="#538A46" width="200px" height="100px">
                        <p>
                            10 <br />
                            Chamados
                        </p>
                    </Card>

                    <Card color="#538A46" width="200px" height="100px">
                        <p>
                            10 <br />
                            Chamados
                        </p>
                    </Card>

                    <Card color="#538A46" width="200px" height="100px">
                        <p>
                            10 <br />
                            Chamados
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    )
}