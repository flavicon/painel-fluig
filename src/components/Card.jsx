import '../styles/card.css';

export function Card(props) {
    return(
        <div className="card" style={{ background: props.color }}>
            <p>
                {props.children}
            </p>
        </div>
    )
}