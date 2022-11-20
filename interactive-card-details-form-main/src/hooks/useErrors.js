import { useState } from "react"

export const useErrors = () => {
    const [errors, setErrors] = useState({ card_number: null, card_holder: null, card_month_expiration: null, card_year_expiration: null, card_security_code: null })

    return [errors, setErrors]
}


