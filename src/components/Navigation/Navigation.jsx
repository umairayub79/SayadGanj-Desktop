import { HomeIcon, MoonIcon, SunIcon } from '@heroicons/react/solid'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navigation = ({ isDarkMode, handleDarkMode }) => {
    const navigate = useNavigate()
    return (
        <div className='h-full items-center text-center flex flex-col justify-between'>
            <div className='mt-1'>
                <HomeIcon className='inline-flex w-10 h-10 cursor-pointer self-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg p-1' onClick={() => { navigate("/") }} />
            </div>
            <div className='mb-1'>
                {isDarkMode ? <SunIcon className='inline-flex w-10 h-10 cursor-pointer self-center text-gray-400 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg p-1' onClick={() => { handleDarkMode(false) }} />
                    : <MoonIcon className='inline-flex w-10 h-10 cursor-pointer self-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg p-1' onClick={() => { handleDarkMode(true) }} />}
            </div>
        </div>
    )
}

export default Navigation