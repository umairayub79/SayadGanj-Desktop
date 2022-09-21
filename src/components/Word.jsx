import React from 'react'
import { useNavigate } from 'react-router-dom'

const Word = ({ word }) => {
  const navigate = useNavigate()

  function createMarkup() {
    return { __html: `<div>${word.definition}</div>` }
  }
  return (
    <div onClick={() => { navigate(`/word/${word.id}`) }} className='dark:bg-gray-800 cursor-pointer relative overflow-hidden items-center w-[600px] min-w-[400px] tracking-wider leading-10 m-2 p-4 max-w-sm  rounded-lg border dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 border-gray-200 shadow-md hover:bg-gray-100'>
      <div className='item ' dangerouslySetInnerHTML={createMarkup()}></div>
    </div>
  )
}

export default Word