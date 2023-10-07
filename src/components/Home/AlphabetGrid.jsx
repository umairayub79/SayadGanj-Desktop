import React from 'react';
import { Link } from 'react-router-dom';

const AlphabetGrid = () => {
    const alphabets = [
        'آ',
        'ا',
        'ب',
        'پ',
        'ت',
        'ٹ',
        'ج',
        'چ',
        'د',
        'ڈ',
        'ر',
        'ز',
        'ژ',
        'س',
        'ش',
        'ک',
        'گ',
        'ل',
        'م',
        'ن',
        'و',
        'ھ',
        'ء',
        'ی',
        'ے',
    ];

    return (
        <div className='dark:text-white text-center mt-5 p-4'>
            <h2 className='text-2xl dark:text-white font-bold mb-4 text-center'>لبزانی آب</h2>
            <h3 className='text-lg mt-1'>
                پہ لبزانی چارگ ءَ یک آبے گچین بہ کَن اِت
            </h3>
            <div className='overflow-x-auto mt-5'>
                <div className='grid grid-cols-4 sm:grid-cols-6 md:grid-cols-12 gap-4 sm:gap-2 md:gap-1'>
                    {alphabets.map((alphabet, index) => (
                        <Link
                            to={`/search/${alphabet}`}
                            key={index}
                            className='cursor-pointer p-5 text-2xl border border-gray-300 rounded-md shadow dark:border-gray-700 sm:p-2 md:p-1'
                            aria-label={`Search words starting with ${alphabet}`}
                        >
                            {alphabet}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AlphabetGrid;