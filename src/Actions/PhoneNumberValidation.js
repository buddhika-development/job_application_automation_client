
const phoneNumberValidation = (phone_number) => {

    const PHONE_NUMBER_VALIDATION_REGEX = /^(?:0|94|\+94)?(?:7|1|2|3|4|5|6|8|9)(\d{8})$/
    return PHONE_NUMBER_VALIDATION_REGEX.test(phone_number)
    
}

export default phoneNumberValidation