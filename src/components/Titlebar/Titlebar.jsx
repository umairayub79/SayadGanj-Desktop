import React, { useState } from 'react';
import cx from 'classnames'
import './style.css'

const Titlebar = () => {
    const [isActive, setIsActive] = useState()
    const [isMaximized, setIsMaximized] = useState()

    window.ipc.on("winState", (event, msg) => {
        setIsMaximized(msg === "maximized")
    });

    window.ipc.on("winFocusState", (event, msg) => {
        setIsActive(msg === "focused")
    });

    return (
        <div className={cx('top-0 relative border-b dark:border-gray-700 z-[99999]', {
            'bg-gray-100 dark:bg-gray-800': isActive,
            'bg-gray-200 dark:bg-gray-700': !isActive
        })}>
            <div className="top-0 w-full h-7 flex relative">
                <div className="Titlebar-drag-region top-0 left-0 block absolute h-full w-full z-[-1]"></div>
                <div className="Title-Bar__section-windows-control flex flex-row items-center ">
                    <div
                        className="flex items-center justify-center h-full w-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" strokeLinejoin="round">
                            <circle onClick={window.api.closeHandler} className={cx({
                                'fill-[#363636] dark:fill-[#757575] hover:fill-[#F35D58] dark:hover:fill-[#F35D58]': isActive,
                                'fill-[#757575] hover:fill-[#F35D58]': !isActive
                            })} cx="11.6" cy="11.6" r="11.4" />
                        </svg>
                    </div>
                    <div
                        className="flex items-center justify-center h-full w-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" strokeLinejoin="round">
                            <circle onClick={isMaximized ? window.api.unmaximizeHandler : window.api.maximizeHandler} className={cx({
                                'fill-[#363636] dark:fill-[#757575] hover:fill-[#2BC73B] dark:hover:fill-[#2BC73B]': isActive,
                                'fill-[#757575] hover:fill-[#2BC73B]': !isActive
                            })} cx="11.6" cy="11.6" r="11.4" />
                        </svg>
                    </div>
                    <div
                        className="flex items-center justify-center h-full w-8">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" strokeLinejoin="round">
                            <circle onClick={window.api.minimizeHandler} className={cx({
                                'fill-[#363636] dark:fill-[#757575] hover:fill-[#F8B92B] dark:hover:fill-[#F8B92B]': isActive,
                                'fill-[#757575] hover:fill-[#F8B92B]': !isActive
                            })} cx="11.6" cy="11.6" r="11.4" />
                        </svg>
                    </div>

                </div>
                <div
                    style={isMaximized ? { display: 'none' } : {}}
                    className="resizer top-0 absolute w-full h-[20%]">
                </div>
            </div>
        </div >
    )
}

export default Titlebar