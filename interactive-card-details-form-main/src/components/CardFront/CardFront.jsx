import './CardFront.css'

const CardFront = () => {
    return (
        <div className='card-front'>
            <div className='card-img'>
                <img src="/images/bg-card-front.png" alt="bg-card-front" />
            </div>
            <div className='card-front-info'>
                <div className='circles-container'>
                    <span className='circles'></span>
                    <span className='circles'></span>
                </div>
                <div className='card-front-info__data'>
                    <p className='data__number'>0000 0000 0000 0000</p>
                    <div className='data__name-and-date'>
                        <p className='data__name-and-date__name'>Jane Appleseed</p>
                        <p className='data__name-and-date__date'>00/00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardFront