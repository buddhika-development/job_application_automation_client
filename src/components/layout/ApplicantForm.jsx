"use client"

import React, { useActionState } from 'react'
import Form from 'next/form'
import InputSection from './InputSection'
import HandleFormSubmit from '@/Actions/HandleFormSubmit'
import SubmitButton from '../ui/SubmitButton'
import ErrorSection from '../ui/ErrorSection'
import SuccessMessage from '../ui/SuccessMessage'
import FileInput from '../ui/FileInput'

const ApplicantForm = () => {

  const initialStatues = {
    error : '',
    message : ''
  }
  
  const [state, formAction] = useActionState(HandleFormSubmit, initialStatues)
  
  return (
    <div className='w-[600px]'>

      <Form action={formAction}>
        <InputSection type={'text'} placeholder={'John Wick'} name={'applicant-name'} lable={'Full Name'} />
        <InputSection type={'email'} placeholder={'example@sample.com'} name={'applicant-mail'} lable={'Email address'} />
        <InputSection type={'text'} placeholder={'phone number'} name={'applicant-contact'} lable={'Contact info'} />
        <FileInput />

        {/* is there any error occur in the process */}
        {state?.error && (
          <ErrorSection error_message={state?.error} />
        )}

        {/* is process is successfully executed */}
        {state?.message && (
          <SuccessMessage success_message={state?.message} />
        )}
        
        <div className="submit mt-8">
          <SubmitButton button_value={'Apply'} />
        </div>
      </Form>
    </div>
  )
}

export default ApplicantForm