import React from 'react'
import cx from 'classnames'

const Toast = ({ toast }) => {
    const classes = cx(
        'flex items-center py-2 px-3 shadow-md mb-2',
        {
            'bg-red-600 border-s-4 border-red-800': toast.type === 'error',
            'bg-blue-500 border-s-4 border-blue-700': toast.type === 'success',
        }
    );

    return (
        <div className={classes}>
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 ">
                {toast.type === 'success' ?
                    <div className="text-blue-500 rounded-full bg-white me-3">
                        <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" className="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z" />
                        </svg>
                    </div> : <div className="text-red-500 rounded-full bg-white me-3">
                        <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" className="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z" />
                            <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z" />
                        </svg>
                    </div>}
            </div>
            <div className="text-white text-xl max-w-xs">
                {toast.message}
            </div>
        </div>
    )
}

export default Toast