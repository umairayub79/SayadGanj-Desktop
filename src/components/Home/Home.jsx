import React from 'react';
import { RandomWord } from './RandomWord';
import Searchbar from './Searchbar';

function Home() {
    return (
        <div className='flex flex-col items-center justify-center'>
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
// Not Found
