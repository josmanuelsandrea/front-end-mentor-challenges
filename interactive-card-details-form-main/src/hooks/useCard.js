import { useState } from "react"

const addSeparation = (string)=>{
    let newString = string.replaceAll(' ', '').match(/.{1,4}/g).join(' ')
    return newString
}

export const useCard = (DEFAULT_CREDENTIALS) => {
    if (!DEFAULT_CREDENTIALS) DEFAULT_CREDENTIALS = { card_number: '', card_holder: '', card_month_expiration: '', card_year_expiration: '', card_security_code: '' }

    const [credentials, setCredentials] = useState(DEFAULT_CREDENTIALS)

    const changeCredentials = (e) => {
        if (e.target.name === 'card_number'){
            if (e.target.value !== ''){
                let string = addSeparation(e.target.value)
                setCredentials({ ...credentials, [e.target.name]: string })
                return
            }
        }

        if (e.target.name === 'card_month_expiration' || e.target.name === 'card_year_expiration'){
            if (e.target.value.length > 2){
                setCredentials({ ...credentials, [e.target.name]: e.target.value.slice(0, 2)})
                return
            }
        }

        if (e.target.name === 'card_security_code'){
            if (e.target.value.length > 3){
                setCredentials({ ...credentials, [e.target.name]: e.target.value.slice(0, 3)})
                return
            }
        }

        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return [credentials, changeCredentials]
}