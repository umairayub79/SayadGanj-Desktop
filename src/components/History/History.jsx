import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { HiChevronRight } from 'react-icons/hi';
import { getHistory } from '../../util/localStorage';

const History = () => {
    const [history] = useState(getHistory())
    const navigate = useNavigate()

    const ListItem = ({ text }) => {
        return (
            <div className='flex justify-between items-center mb-1 border-b border-gray-200 dark:border-gray-700'>
                <h3>{text}</h3>
                <FiArrowLeft className='inline-flex w-10 h-10 mt-1 cursor-pointer self-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg p-1' onClick={() => { navigate(`/search/${text}`) }} />
            </div>
        )
    }
    return (
        <div className='flex flex-col'>
            <div className='sticky top-0 z-50 nav flex flex-row bg-blue-500 dark:bg-gray-800 text-white items-center justify-center'>
                <div>
                    <HiChevronRight className='w-14 h-14 inline-flex self-center hover:cursor-pointer hover:text-gray-300' onClick={() => { navigate(-1) }} />
                </div>
                <div>
                    <h2>گوستانک</h2>
                </div>
            </div>

            <div className='flex flex-col p-5'>
                {history && history.map((item) => <ListItem key={item.id} text={item.query} />)}
            </div>
        </div>
    )
}

export default History
