import React from 'react'

const FileInput = () => {
  return (
    <input type="file" name="applicant-cv" accept='.pdf, .docx' className='cursor-pointer bg-zinc-900 w-full py-8 px-8 rounded-md border-[1px] border-dashed border-zinc-700 text-sm' />
  )
}

export default FileInput