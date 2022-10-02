import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { HiChevronRight } from 'react-icons/hi';
import { MdContentCopy, MdInfoOutline } from 'react-icons/md';
import Skeleton from '../Skeleton';
import { InfoModal } from '../modals/InfoModal';
import { useToast } from '../../hooks/useToast'


const WordDetail = () => {
    const showToast = useToast(1000)
    const [response, setResponse] = useState([]);
    const [isOpen, setIsOpen] = useState(false)
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

    function copyToClipboard() {
        const definition = response.definition.replace(/[<h1></h1>]/g, "")
        navigator.clipboard.writeText(definition)
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
                    <MdContentCopy className='w-10 h-10 ml-1 inline-flex self-center hover:cursor-pointer hover:text-gray-300' onClick={() => { copyToClipboard() }} />
                    <MdInfoOutline className='w-10 h-10 inline-flex self-center hover:cursor-pointer hover:text-gray-300' onClick={() => { setIsOpen(true) }} />
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
            <InfoModal isOpen={isOpen} handleClose={() => setIsOpen(false)} />

        </div>
    )
}
export default WordDetail