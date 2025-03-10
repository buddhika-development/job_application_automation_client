import React from 'react'
import Input from '../ui/Input'
import Lable from '../ui/Lable'

const InputSection = ({type, placeholder, name, lable}) => {
  return (
    <div className='flex flex-col mb-4'>
        <Lable htmlFor={name}>{lable}</Lable>
        <Input type={type} placeholder={placeholder} name={name} />
    </div>
  )
}

export default InputSection