import React from 'react'
import { useNavigate } from 'react-router-dom'

const Word = ({ word }) => {
  const navigate = useNavigate()

  return (
    <div onClick={() => { navigate(`/word/${word.id}`) }} className='bg-gray-100 dark:bg-gray-800 cursor-pointer relative overflow-hidden items-center w-[600px] min-w-[400px] tracking-wider leading-10 m-2 p-4 max-w-sm  rounded-lg border dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 border-gray-300 shadow-md hover:bg-gray-200'>
      <div className='item mask '>
        <h1>{word.full_word_with_symbols}</h1>
        <p>{word.definition}</p>
      </div>
    </div>
  )
}

export default Word