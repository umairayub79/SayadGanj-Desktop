import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/solid';
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
        <div className='nav flex flex-row bg-blue-500 text-white items-center justify-center'>
            <div>
                <ChevronRightIcon className='w-16 h-16 inline-flex self-center hover:cursor-pointer hover:text-gray-300' onClick={() => { navigate(-1) }} />
            </div>
            <div>
                <h1>درگیجگ ءِ آسر</h1>
            </div>
        </div>

        <div className='flex flex-col items-center justify-center'>
            {
                loading ? (
                <div>
                    <Skeleton />
                    <Skeleton/>
                </div>) : (
                    response.length > 0 ? (
                        <div className='m-5'>
                            <div className='overflow-auto'>
                                {response.map((word) => <Word key={word.id} word={word} />)}
                            </div>
                        </div>
                    ) : <h1>تئ پکاریں گالبند گوں ہچ بزانتءَ مئیل نہ وارت.</h1>)
            }
        </div>
    </div>
    )
}

export default SearchResults