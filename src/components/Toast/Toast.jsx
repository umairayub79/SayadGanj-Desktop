import React from 'react'
import cx from 'classnames'

export default function Toast({ type, message }) {
    const classes = cx(
        'fixed z-20 top-28 left-1/2 transform -translate-x-1/2 max-w-sm shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidded',
        {
            'bg-red-500 text-white': type === 'error',
            'bg-blue-500 text-white': type === 'success',
        }
    )
    return (
        <>
            <div className={classes}>
                <div className="p-2">
                    <p className='text-sn text-center font-medium'>{message}</p>
                </div>
            </div>
        </>
    )
}