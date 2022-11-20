const validations = ({ CARD_HOLDER_NAME, CARD_NUMBER, MONTH_EXPIRATION, YEAR_EXPIRATION, CVC_CODE }) => {
    const errors = {}
    let currentYear = new Date().getFullYear().toString().slice(2, 4)

    // Empty fields validations

    if (CARD_HOLDER_NAME.current.value === '') {
        errors[CARD_HOLDER_NAME.current.name] = `Can't be blank`
    } else {
        errors[CARD_HOLDER_NAME.current.name] = null
    }

    if (CARD_NUMBER.current.value === '') {
        errors[CARD_NUMBER.current.name] = `Can't be blank`
    } else if (/[a-z]/i.test(CARD_NUMBER.current.value)){
        errors[CARD_NUMBER.current.name] = `Wrong format, numbers only`
    } else {
        errors[CARD_NUMBER.current.name] = null
    }

    if (MONTH_EXPIRATION.current.value === '') {
        errors[MONTH_EXPIRATION.current.name] = `Can't be blank`
    } else if (parseInt(MONTH_EXPIRATION.current.value) > 12 || MONTH_EXPIRATION.current.value.length < 2){
        errors[MONTH_EXPIRATION.current.name] = `Insert a valid value`
    } else {
        errors[MONTH_EXPIRATION.current.name] = null
    }

    if (YEAR_EXPIRATION.current.value === '') {
        errors[YEAR_EXPIRATION.current.name] = `Can't be blank`
    } else if (parseInt(YEAR_EXPIRATION.current.value) < currentYear) {
        errors[YEAR_EXPIRATION.current.name] = `Insert a valid year`
    } else {
        errors[YEAR_EXPIRATION.current.name] = null
    }

    if (CVC_CODE.current.value === '') {
        errors[CVC_CODE.current.name] = `Can't be blank`
    } else {
        errors[CVC_CODE.current.name] = null
    }

    return errors
}

export default validations