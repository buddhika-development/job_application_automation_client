import React from 'react'

const Input = ({type , name, placeholder}) => {
  return (
    <input 
      type={type} 
      name={name} 
      placeholder={placeholder} 
      // required
      className='w-full bg-zinc-900 h-[40px] border-[1px] border-zinc-700 rounded-md px-4 placeholder:text-sm focus:outline-0'
    />
  )
}

export default Input