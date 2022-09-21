import React, { useState, useEffect } from 'react'
import Word from '../Word';
import Skeleton from '../Skeleton';


export const RandomWord = () => {
    const [response, setResponse] = useState();
    const [loading, setLoading] = useState(false)

    async function getRandomWord() {
        setLoading(true)
        setResponse(await window.api.randomWord())
        setLoading(false)
    }
    useEffect(() => {
        getRandomWord()
    }, []);

    return (
        <div className='m-5 flex flex-col items-center justify-center'>
            <h2 className='text-2xl dark:text-white'>Random Word</h2>
            {
               loading ? <Skeleton/> :  response ? <Word word={response}/> : '' 
            }
        </div>
    )
}
