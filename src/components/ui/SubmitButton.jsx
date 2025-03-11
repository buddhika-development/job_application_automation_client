import React from 'react'

const SubmitButton = ({button_value}) => {
  return (
    <input 
        type="submit" 
        value= {button_value} 
        className='bg-white text-black font-bold h-[40px] w-full rounded-md cursor-pointer hover:bg-transparent hover:text-white hover:border-[1px] duration-200' 
    />
  )
}

export default SubmitButton