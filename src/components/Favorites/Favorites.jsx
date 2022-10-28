import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiTrash } from 'react-icons/fi';
import { HiChevronRight } from 'react-icons/hi';
import { deleteFavorite, deleteFavorites, getFavorites } from '../../util/localStorage';

const Favorites = () => {
    const [favorites, setFavorites] = useState(getFavorites())
    const navigate = useNavigate()

    const ListItem = ({ word }) => {
        return (
            <div className='flex justify-between items-center mb-1 border-b border-gray-300 dark:border-gray-700'>
                <div className='w-[90%] overflow-hidden'>
                    <h3>{word.full_word_with_symbols}</h3>
                    <p className='p-2 item mask'>{word.definition}</p>
                </div>
                <div className='flex-col'>
                    <FiTrash className='inline-flex w-10 h-10 mt-1 cursor-pointer self-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg p-1' onClick={() => { deleteFavorite(word.id); setFavorites(getFavorites()) }} />
                    <FiArrowLeft className='inline-flex w-10 h-10 mt-1 cursor-pointer self-center text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg p-1' onClick={() => { navigate(`/word/${word.id}`) }} />
                </div>

            </div>
        )
    }
    return (
        <div className='flex flex-col'>
            <div className='sticky top-0 z-50 flex flex-row justify-between bg-blue-500 dark:bg-gray-800 text-white items-center'>
                <div>
                    <HiChevronRight className='w-14 h-14 inline-flex self-center hover:cursor-pointer hover:text-gray-300' onClick={() => { navigate('/') }} />
                </div>
                <div>
                    <h2>درپینتگیں</h2>
                </div>
                <div className='ml-2'>
                    <FiTrash className='w-10 h-10 inline-flex self-center hover:cursor-pointer hover:text-gray-300' onClick={() => { deleteFavorites(); setFavorites(getFavorites()) }} />
                </div>
            </div>

            <div className='flex flex-col p-5'>
                {favorites.length > 0 ? favorites.map((item) => <ListItem key={item.id} word={item} />) : <h2 className='self-center text-center dark:text-gray-200'>چیزے پہ پیش کنگ ءَ دست نہ کَپت</h2>}
            </div>
        </div>
    )
}

export default Favorites
