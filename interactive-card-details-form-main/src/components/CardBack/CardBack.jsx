import './CardBack.css'

const CardBack = ({ credentials }) => {
    return (
        <div className='card-back'>
            <div className='card-CVC'>{credentials.card_security_code}</div>
        </div>
    )
}

export default CardBack