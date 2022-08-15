import React from 'react'
import { useNavigate } from 'react-router-dom'

const Word = ({ word }) => {
  const navigate = useNavigate()

  function createMarkup() {
    return { __html: `<div>${word.definition}</div>` }
  }
  return ( 
    <div onClick={() => {navigate(`/word/${word.id}`)}} className='cursor-pointer relative overflow-hidden items-center item w-[700px] min-w-[500px] tracking-wider leading-10 m-5 p-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 hover:cursor-pointer'>
        <div dangerouslySetInnerHTML={createMarkup()}></div>
    </div>
  )
}

export default Word