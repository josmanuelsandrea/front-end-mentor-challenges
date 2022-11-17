import './Form.css'

const Form = () => {
    return (
        <form>
            <div>
                <label>CARDHOLDER NAME</label>
                <input type="text" />
            </div>
            <div>
                <label>CARD NUMBER</label>
                <input type="text" />
            </div>
            <div>
                <div>
                    <label>EXP. DATE (MM/YY)</label>
                    <div>
                        <input type="text" />
                    </div>
                    <div>
                        <input type="text" />
                    </div>
                </div>
                <div>
                    <label>CVC</label>
                    <input type="number" />
                </div>
            </div>
        </form>
    )
}

export default Form