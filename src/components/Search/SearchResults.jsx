import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi';
import Skeleton from '../Skeleton';
import Word from '../Word';

const SearchResults = () => {
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const { query } = useParams()

    async function findAll() {
        setLoading(true)
        setResponse(await window.api.findAll(query))
        setLoading(false)
    }
    useEffect(() => {
        findAll()
    }, [query]);

    return (
        <div className='flex flex-col'>
            <div className='sticky top-0 z-50 nav flex flex-row bg-blue-500 dark:bg-gray-800 text-white items-center justify-center'>
                <div>
                    <HiChevronRight className='w-14 h-14 inline-flex self-center hover:cursor-pointer hover:text-gray-300' onClick={() => { navigate(-1) }} />
                </div>
                <div>
                    <h2>درگیجگ ءِ آسر</h2>
                </div>
            </div>

            <div className='flex flex-col items-center justify-center'>
                {
                    loading ? (
                        <div>
                            <Skeleton />
                            <Skeleton />
                        </div>) : (
                        response.length > 0 ? (
                            <div>
                                <div className='overflow-auto'>
                                    {response.map((word) => <Word key={word.id} word={word} />)}
                                </div>
                            </div>
                        ) : <h2 className='dark:text-gray-200'>تئ پکاریں گالبند گوں ہچ بزانتءَ مئیل نہ وارت.</h2>)
                }
            </div>
        </div>
    )
}

export default SearchResults