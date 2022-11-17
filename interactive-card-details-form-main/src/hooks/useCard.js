import { useState } from "react"

export const useCard = (DEFAULT_CREDENTIALS) => {
    if (!DEFAULT_CREDENTIALS) DEFAULT_CREDENTIALS = { card_number: '0000 0000 0000 0000', card_holder: 'JANE APPLESEED', card_expiration_date: '00/04', card_security_code: '000' }

    const [credentials, setCredentials] = useState(DEFAULT_CREDENTIALS)

    return [credentials, setCredentials]
}