//import { useParams } from "react-router-dom"
import { Card } from '../components/Card';

import avatar from '../assets/avatar.svg';

import '../styles/attendant.css';
import { CardList } from '../components/CardList';

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
                            10 <br />
                            Chamados
                    </Card>

                    <Card color="#EBBA31" width="200px" height="100px">
                            10 <br />
                            Chamados
                    </Card>

                    <Card color="#AE191C" width="200px" height="100px">
                            10 <br />
                            Chamados
                    </Card>
                </div>
                <div className="fluigs">
                    <CardList color="#AE191C" />
                    <CardList color="#83B04F" />
                    <CardList color="#AE191C" />
                    <CardList color="#EBBA31" />
                    <CardList color="#AE191C" />
                    <CardList color="#AE191C" />
                    <CardList color="#AE191C" />
                    <CardList color="#EBBA31" />
                    <CardList color="#83B04F" />
                    <CardList color="#AE191C" />
                    <CardList color="#83B04F" />
                </div>
            </div>
        </div>
    )
}