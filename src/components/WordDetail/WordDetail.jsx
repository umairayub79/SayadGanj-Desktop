import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi';
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
        <div className='flex flex-col w-full'>
            <div className='sticky top-0 z-50 nav flex flex-row bg-blue-500 dark:bg-gray-800 text-white items-center justify-center'>
                <div>
                    <HiChevronRight className='w-14 h-14 inline-flex self-center hover:cursor-pointer hover:text-gray-300' onClick={() => { navigate(-1) }} />
                </div>
                <div>
                    <h2>سرپادی</h2>
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
                                <div dangerouslySetInnerHTML={createMarkup(response)}></div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    )
}
export default WordDetail