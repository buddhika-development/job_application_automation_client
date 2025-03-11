"use server"

import emailValidation from "@/utils/EmailValidation"
import phoneNumberValidation from "./PhoneNumberValidation"

const HandleFormSubmit = async (prevState, formData) => {
  // Access the data from the request
  const applicant_full_name = formData.get('applicant-name')
  const applicant_email_address = formData.get('applicant-mail')
  const applicant_contact_number = formData.get('applicant-contact')
  const applicant_cv = formData.get('applicant-cv')

  let response;

  // Validates the inputs
  if (applicant_contact_number === '' || applicant_email_address === '' || applicant_full_name === '' || !applicant_cv || applicant_cv.name === 'undefined') {
    console.log("Please enter all the details")

    response = {
      error: 'Please fill all the details....'
    }
    return response;
  }
  
  // Check email validation
  if (!emailValidation(applicant_email_address)) {
    return {
      error: "Please enter valid email"
    }
  } 
  
  if (!phoneNumberValidation(applicant_contact_number)) {
    return {
      error: 'Please enter valid phone number'
    }
  }
  
  if (!applicant_cv || applicant_cv.name === 'undefined') {
    return {
      error: "Please insert CV correctly.."
    }
  }

  // If all validations pass, send data to Flask backend
  try {
    // Create a FormData object to send to the Flask backend
    const backendFormData = new FormData();
    backendFormData.append('applicant_name', applicant_full_name);
    backendFormData.append('applicant_email', applicant_email_address);
    backendFormData.append('applicant_contact', applicant_contact_number);
    
    // Convert the file to a format that can be sent
    const fileBuffer = await applicant_cv.arrayBuffer();
    const file = new File([fileBuffer], applicant_cv.name, { type: applicant_cv.type });
    backendFormData.append('pdf_file', file);

    // Send the data to your Flask backend
    const flaskResponse = await fetch('http://127.0.0.1:8080/api/cv-process', {
      method: 'POST',
      body: backendFormData,
    });

    if (!flaskResponse.ok) {
      const errorData = await flaskResponse.json();
      return {
        error: errorData.error || 'Failed to submit application'
      }
    }

    const responseData = await flaskResponse.json();
    
    return {
      message: responseData.message || "Successfully applied..."
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      error: 'Failed to connect to the server. Please try again later.'
    }
  }
}

export default HandleFormSubmit