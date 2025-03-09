import React from 'react'

const Lable = ({htmlFor, children}) => {
  return (
    <label 
      htmlFor={htmlFor}
      className= 'text-sm text-zinc-200 mb-2'
    >{children}</label>
  )
}

export default Lable