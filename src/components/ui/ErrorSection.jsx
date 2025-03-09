import React from 'react'

const ErrorSection = ({error_message}) => {
  return (
    <div className='mt-5 h-[40px] bg-red-400/10 border-[1px] border-red-400/30 flex justify-center items-center rounded-md'>
        <p className='text-[12px] text-red-200'>{error_message}</p>
    </div>
  )
}

export default ErrorSection