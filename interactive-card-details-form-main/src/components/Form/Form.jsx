import './Form.css'
import { useRef } from 'react'
import { useErrors } from '../../hooks/useErrors'
import validations from '../../functions/validations'

const Form = ({ changeCredentials, credentials }) => {
    const [errors, setErrors] = useErrors()

    const CARD_HOLDER_NAME = useRef()
    const CARD_NUMBER = useRef()
    const MONTH_EXPIRATION = useRef()
    const YEAR_EXPIRATION = useRef()
    const CVC_CODE = useRef()

    return (
        <form className='card_form' onSubmit={(e) => {
            e.preventDefault()
            const errorsObject = validations({ CARD_HOLDER_NAME, CARD_NUMBER, MONTH_EXPIRATION, YEAR_EXPIRATION, CVC_CODE, errors, setErrors })
            setErrors({...errors, ...errorsObject })
        }
        }>
            <div className='text-field'>
                <label>CARDHOLDER NAME</label>
                <input type="text" placeholder='JANE APPLESEED' name="card_holder" ref={CARD_HOLDER_NAME} onChange={changeCredentials} value={credentials.card_holder} className={errors.card_holder ? 'ERROR' : ''}/>
                {errors.card_holder ? <p className='field-error'>{errors.card_holder}</p>: null}
            </div>
            <div className='text-field'>
                <label>CARD NUMBER</label>
                <input type="text" placeholder='0000 0000 0000 0000' ref={CARD_NUMBER} name="card_number" onChange={changeCredentials} value={credentials.card_number} maxLength="19" className={errors.card_number ? 'ERROR' : ''}/>
                {errors.card_number ? <p className='field-error'>{errors.card_number}</p>: null}
            </div>
            <div className='form__security-fields'>
                <div className='exp__date__fields'>
                    <label>EXP. DATE (MM/YY)</label>
                    <div className='exp__date__fields__input'>
                        <input type="number" placeholder='00' ref={MONTH_EXPIRATION} name="card_month_expiration" onChange={changeCredentials} value={credentials.card_month_expiration} className={errors.card_month_expiration ? 'ERROR' : ''}/>
                        <input type="number" placeholder='00' ref={YEAR_EXPIRATION} name="card_year_expiration" onChange={changeCredentials} value={credentials.card_year_expiration} className={errors.card_year_expiration ? 'ERROR' : ''}/>
                    </div>
                    {errors.card_month_expiration ? <p className='field-error'>{errors.card_month_expiration}</p>: null}
                    {errors.card_month_expiration === null && errors.card_year_expiration ? <p className='field-error'>{errors.card_year_expiration}</p>: null}
                </div>
                <div className='cvc__field'>
                    <label>CVC</label>
                    <input type="number" placeholder='000' ref={CVC_CODE} name="card_security_code" onChange={changeCredentials} value={credentials.card_security_code} className={errors.card_security_code ? 'ERROR' : ''}/>
                    {errors.card_security_code ? <p className='field-error'>{errors.card_security_code}</p>: null}
                </div>
            </div>
            <button type='submit'>Confirm</button>
        </form>
    )
}

export default Form