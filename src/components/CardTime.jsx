import '../styles/cardTime.css';

export function CardTime(props) {
    return (
        <div className="cardTime">
            <div className="avatar">
                <img src={props.image} alt="Icone" />
                <p>{props.name}</p>
            </div>
            <div className="info">
                <span>{props.solicit}</span>
                <p>
                    Solicitacoes
                </p>
            </div>
        </div>
    )
}