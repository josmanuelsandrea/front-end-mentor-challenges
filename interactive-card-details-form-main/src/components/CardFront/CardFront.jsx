import './CardFront.css'

const CardFront = ({ credentials }) => {
    return (
        <div className='card-front'>
            <div className='card-info'>
                <div className='circles'>
                    <span className='circle'></span>
                    <span className='circle'></span>
                </div>
                <div className='card-info-nd'>
                    <p className='card-number'>{credentials.card_number === '' ? '0000 0000 0000 0000' : credentials.card_number }</p>
                    <div className='card-date-name'>
                        <p className='card-name'>{credentials.card_holder}</p>
                        <p className='card-date'>{credentials.card_month_expiration}/{credentials.card_year_expiration}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardFront