import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from '@heroicons/react/solid';
const Searchbar = () => {
    const [word, setWord] = useState();
    const navigate = useNavigate()

    function isNotEmpty() {
        return word !== undefined && word !== null && word !== "" && word !== " "
    }

    function onFormSubmit(e) {
        e.preventDefault()
        if (isNotEmpty()) {
            navigate(`/search/${word}`)
        }
    }
    return (
        <div className='flex flex-col items-center justify-center'>
            <form onSubmit={onFormSubmit} className="flex items-center text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <input
                    onChange={({ target: { value } }) => setWord(value)}
                    value={word}
                    placeholder="لبزءِدرگیجگ ءَ اداں نبشتہ بہ کن اِت"
                    type="text"
                    className="text-xl p-2 text-gray-900 flex-grow focus:outline-none w-full bg-gray-50 rounded-full  dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white" />

                <button type="submit" className="bg-gray-200 dark:bg-gray-500 text-blue-500 dark:text-gray-200 p-2 rounded-full ring-gray-400 hover:ring-1 focus:outline-none active:ring-gray-400 hover:shadow-md">
                    <SearchIcon className='w-8 h-8' />
                </button>
            </form>
        </div>
    )
}

export default Searchbar