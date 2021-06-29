import '../styles/card.css';

export function Card(props) {
    return(
        <div 
            className="card" 
            style={{ 
                background: props.color, 
                width: props.width,
                height: props.height,
        }}>
            <p>
                {props.children}
            </p>
        </div>
    )
}