import React from 'react';
import { RandomWord } from './RandomWord';
import Searchbar from './Searchbar';

function Home() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex items-center'>
            <h1 className='text-5xl dark:text-gray-100 text-blue-500 font-extrabold'>سیدگَنج</h1>
            <span className='text-xl dark:text-gray-100 text-blue-500'>beta</span>
            </div>
            <div>
                <Searchbar />
            </div>
            <div>
                <RandomWord />
            </div>
        </div>
    );
}

export default Home;