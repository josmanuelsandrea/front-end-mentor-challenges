import './CardBack.css'

const CardBack = () => {
    return (
        <div className='card-back'>
            <div className='card-img'>
                <img src="/images/bg-card-back.png" alt="bg-card-front" />
            </div>
            <div className='card-back-info'>
                <div className='behind-card-number'>
                    <p>000</p>
                </div>
            </div>
        </div>
    )
}

export default CardBack