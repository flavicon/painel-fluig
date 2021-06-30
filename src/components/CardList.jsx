import '../styles/cardlist.css';

export function CardList(props) {
    return (
        <div className="cardFluig">
            <p className="numberFluig">95004</p>
            <p className="descriptionFluig">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className="estimative">2 hours</p>
            <div className="statusFluig" style={{backgroundColor: props.color}}></div>
        </div>
    )
}