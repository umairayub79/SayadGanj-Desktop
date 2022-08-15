import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/solid';
import Skeleton from '../Skeleton';

const WordDetail = () => {
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const { id } = useParams()

    async function findOne() {
        setLoading(true)
        setResponse(await window.api.findOne(id))
        setLoading(false)
    }

    useEffect(() => {
        findOne()
    }, [id]);


    function createMarkup(word) {
        return { __html: `<div>${word.definition}</div>` }
    }

    return (
        <div className='flex flex-col'>
            <div className="nav flex flex-row bg-blue-500 text-white items-center justify-center">
                <div>
                    <ChevronRightIcon className='w-16 h-16 inline-flex self-center hover:cursor-pointer hover:text-gray-300' onClick={() => { navigate(-1) }} />
                </div>
                <div>
                    <h1>سرپادی</h1>
                </div>
            </div>

            <div className='ُflex flex-col items-center justify-center'>
                {
                    loading ? (
                        <div>
                            <Skeleton />
                        </div>) : (
                        <div className='m-16'>
                            <div className='text-2xl leading-relaxed'>
                                <div dangerouslySetInnerHTML={createMarkup(response)}></div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    )
}
export default WordDetail