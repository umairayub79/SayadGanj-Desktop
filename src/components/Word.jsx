import React from 'react';
import { useNavigate } from 'react-router-dom';

const Word = ({ word }) => {
  const navigate = useNavigate();

  const handleWordClick = () => {
    navigate(`/word/${word.id}`);
  };

  return (
    <div
      onClick={handleWordClick}
      className='dark:bg-gray-800 cursor-pointer relative overflow-hidden items-center min-w-[50vw] w-[90vw] tracking-wider leading-10 m-2 p-4 max-w-sm rounded-lg border dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-800 border-gray-300 shadow-md'
      role='link'
      tabIndex={0}
      title={word.full_word_with_symbols}
      onKeyPress={(event) => {
        if (event.key === 'Enter') {
          handleWordClick();
        }
      }}
    >
      <div className='item mask'>
        <h1 className='text-3xl'>{word.full_word_with_symbols}</h1>
        <p>{word.definition}</p>
      </div>
    </div>
  );
};

export default Word;