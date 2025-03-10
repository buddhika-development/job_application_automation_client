
"use server"

import emailValidation from "@/utils/EmailValidation"
import phoneNumberValidation from "./PhoneNumberValidation"

const HandleFormSubmit =(prevState,formData) => {

  // access the data from the request
  const applicant_full_name = formData.get('applicant-name')
  const applicant_email_address = formData.get('applicant-mail')
  const applicant_contact_number = formData.get('applicant-contact')
  const applicant_cv = formData.get('applicant-cv')

  let response;

  // validates the inputs
  if (applicant_contact_number == '' || applicant_email_address == '' || applicant_full_name == '' ||  applicant_cv.name == 'undefined'){
    console.log("please enter all the details")

    response = {
      error : 'Please fill all the detials....'
    }
  }
  else {
    
    // check email validation
    if (!emailValidation(applicant_email_address)){
      return response = {
        error : "Please enter valid email"
      }
    }
    else if(!phoneNumberValidation(applicant_contact_number)){
      return response = {
        error : 'Please enter valid phone number'
      }
    }
    else if(applicant_cv.name == 'undefined') {
      return response = {
        error : "Please insert CV correctly.."
      }
    }

    response = {
      message : "Succussfully applied..."
    }


  }

  return response
  
}

export default HandleFormSubmit