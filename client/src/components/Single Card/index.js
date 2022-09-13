import './SingleCard.css';
// import 'sword' from '../../Games/images/sword.png';

export default function SingleCard({ card, handleChoice, flipped, disabled }) {

    const handleClick = () => {
        if (!disabled){
            handleChoice(card)

        }
    }
    return (

        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <img className="front" src={card.src} alt="card front" />
                <img 
                className="back" 
                src= "../../Games/images/sword.png"
                onClick={handleClick}
                alt="card back" />
            </div>
        </div>
    )
}