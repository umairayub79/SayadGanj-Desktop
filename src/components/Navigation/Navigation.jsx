import { HiHome, HiMoon, HiSun } from 'react-icons/hi'
import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import cx from 'classnames'

const Navigation = ({ isDarkMode, handleDarkMode }) => {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <div className='h-full items-center text-center flex flex-col justify-between'>
            <div className='mt-1'>
                <HiHome className={cx('inline-flex w-10 h-10 mt-1 cursor-pointer self-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg p-1', {
                    'text-black dark:text-white bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500' : location.pathname === "/"
                })} onClick={() => { location.pathname !== "/" && navigate("/") }} />
            </div>
            <div className='mb-1'>
                {isDarkMode ? <HiSun className='inline-flex w-10 h-10 cursor-pointer self-center text-gray-400 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg p-1' onClick={() => { handleDarkMode(false) }} />
                    : <HiMoon className='inline-flex w-10 h-10 cursor-pointer self-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg p-1' onClick={() => { handleDarkMode(true) }} />}
            </div>
        </div>
    )
}

export default Navigation