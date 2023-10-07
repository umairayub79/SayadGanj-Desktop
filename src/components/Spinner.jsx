import React from 'react';

const Spinner = () => {
    return (
        <div className='flex items-center justify-center h-screen' aria-label='Loading'>
            <div className='loader ease-linear rounded-full border-4 border-t-4 border-blue-500 h-12 w-12' role='status' aria-live='polite'></div>
        </div>
    );
};

export default Spinner;