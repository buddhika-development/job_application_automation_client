import React from 'react'

const Title = ({children}) => {
  return (
    <div>
        <h1 className='font-bold text-3xl'>{children}</h1>
    </div>
  )
}

export default Title