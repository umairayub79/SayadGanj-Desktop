import { HiHome, HiMoon, HiSun } from 'react-icons/hi'
import { MdHistory, MdFavorite } from 'react-icons/md'
import { BsFonts } from 'react-icons/bs'
import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import cx from 'classnames'

const Navigation = ({ isDarkMode, handleDarkMode, handleFontSettingsModal }) => {
    const navigate = useNavigate()
    const location = useLocation()
    return (
        <div className='h-full items-center text-center flex flex-col justify-between'>
            <div className='mt-1'>
                <HiHome className={cx('inline-flex w-10 h-10 mt-1 cursor-pointer self-center text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg p-1', {
                    'text-black dark:text-white bg-gray-300 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500': location.pathname === "/"
                })} onClick={() => { location.pathname !== "/" && navigate("/") }} />

                <MdFavorite className={cx('inline-flex w-10 h-10 mt-1 cursor-pointer self-center text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg p-1', {
                    'text-black dark:text-white bg-gray-300 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600': location.pathname === "/favorites"
                })} onClick={() => { location.pathname !== "/favorites" && navigate("/favorites") }} />

                <MdHistory className={cx('inline-flex w-10 h-10 mt-1 cursor-pointer self-center text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg p-1', {
                    'text-black dark:text-white bg-gray-300 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600': location.pathname === "/history"
                })} onClick={() => { location.pathname !== "/history" && navigate("/history") }} />


            </div>
            <div className='mb-1'>
                <BsFonts className={'inline-flex w-10 h-10 mt-1 cursor-pointer self-center dark:text-gray-300 text-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg p-1'} onClick={() => handleFontSettingsModal()} />

                {isDarkMode ? <HiSun className='inline-flex w-10 h-10 cursor-pointer self-center text-gray-400 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg p-1' onClick={() => { handleDarkMode(false) }} />
                    : <HiMoon className='inline-flex w-10 h-10 cursor-pointer self-center text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg p-1' onClick={() => { handleDarkMode(true) }} />}
            </div>
        </div>
    )
}

export default Navigation