import React from 'react'

const SuccessMessage = ({success_message}) => {
  return (
    <div className='mt-5 h-[40px] bg-green-400/10 border-[1px] border-green-400/30 flex justify-center items-center rounded-md'>
        <p className='text-[12px] text-green-200'>{success_message}</p>
    </div>
  )
}

export default SuccessMessage