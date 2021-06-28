import { Link } from 'react-router-dom';
import { CardTime } from '../components/CardTime';
import avatarIcon from '../assets/avatar.svg';

import '../styles/time.css';

export function Time() {
    return (
        <section className="pageTime">
            <Link to="/joseCarlos">
                <CardTime 
                    image={avatarIcon} 
                    name="Jose Carlos"   
                    solicit="30"
                />
            </Link>

            <CardTime 
                image={avatarIcon} 
                name="Jose Luiz"   
                solicit="20"
            />

            <CardTime 
                image={avatarIcon} 
                name="Pedro Icaro"   
                solicit="40"
            />

            <CardTime 
                image={avatarIcon} 
                name="Paulo Jose"   
                solicit="50"
            />

            <CardTime 
                image={avatarIcon} 
                name="Paulo Jose"   
                solicit="50"
            />
        </section>
    )
}