import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi';
import { MdContentCopy, MdFavorite, MdFavoriteBorder, MdInfoOutline } from 'react-icons/md';
import Skeleton from '../Skeleton';
import { InfoModal } from '../Modals/InfoModal';
import { useToast } from '../../hooks/useToast'
import { addToFavorites, deleteFavorite, isInFavorites } from '../../util/localStorage'

const WordDetail = () => {
    const showToast = useToast(1000)
    const [response, setResponse] = useState([]);
    const [isOpen, setIsOpen] = useState(false)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const { id } = useParams()
    const [isFavorite, setIsFavorite] = useState(isInFavorites(id))

    async function findOne() {
        setLoading(true)
        setResponse(await window.api.findOne(id))
        setLoading(false)
    }

    useEffect(() => {
        findOne()
    }, [id]);


    function copyToClipboard() {
        navigator.clipboard.writeText(response.definition)
        showToast('success', 'کاپی بوت')
    }
    return (
        <div className='flex flex-col w-full'>
            <div className='sticky top-0 z-10 flex flex-row justify-between bg-blue-500 dark:bg-gray-800 text-white items-center'>
                <div>
                    <HiChevronRight className='w-14 h-14 inline-flex self-center hover:cursor-pointer hover:text-gray-300' onClick={() => { navigate(-1) }} />
                </div>
                <div>
                    <h2>سرپادی</h2>
                </div>

                <div className='ml-2'>
                    {!isFavorite ? <MdFavoriteBorder className='w-10 h-10 ml-1 inline-flex self-center hover:cursor-pointer hover:text-gray-100' onClick={() => { addToFavorites(response); setIsFavorite(true) }} /> :
                        <MdFavorite className='w-10 h-10 ml-1 inline-flex self-center hover:cursor-pointer hover:text-gray-100' onClick={() => { deleteFavorite(id); setIsFavorite(false) }} />}
                    <MdContentCopy className='w-10 h-10 ml-1 inline-flex self-center hover:cursor-pointer hover:text-gray-100' onClick={() => { copyToClipboard() }} />
                    <MdInfoOutline className='w-10 h-10 inline-flex self-center hover:cursor-pointer hover:text-gray-100' onClick={() => { setIsOpen(true) }} />
                </div>
            </div>
            <div className='ُflex flex-col items-center justify-center dark:text-gray-100'>
                {
                    loading ? (
                        <div>
                            <Skeleton />
                        </div>) : (
                        <div className='m-8'>
                            <div className='text-2xl leading-relaxed'>
                                <div>
                                    <h1>{response.full_word_with_symbols}</h1>
                                    <p className='whitespace-pre-line'>{response.definition}</p>
                                </div>
                            </div>
                        </div>)
                }
            </div>
            <InfoModal isOpen={isOpen} handleClose={() => setIsOpen(false)} />

        </div>
    )
}
export default WordDetail
