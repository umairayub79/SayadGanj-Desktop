import React, { useState } from 'react';
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
        <div className="Titlebar">
            <div
                className={'Title-Bar'}>
                <div className="Titlebar-drag-region"></div>
                <div className="Title-Bar__section-windows-control">
                    <div
                        className="section-windows-control_box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" strokeLinejoin="round"><circle onClick={window.api.closeHandler} className={isActive ? 'close-active_logo' : 'close-inactive_logo'} cx="11.6" cy="11.6" r="11.4" /></svg>
                    </div>
                    {isMaximized ?
                        <div
                            className="section-windows-control_box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" strokeLinejoin="round"><circle onClick={window.api.unmaximizeHandler} className={isActive ? 'unmaximize-active_logo' : 'unmaximize-inactive_logo'} cx="11.6" cy="11.6" r="11.4" /></svg>
                        </div>
                        :
                        <div
                            className="section-windows-control_box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" strokeLinejoin="round"><circle onClick={window.api.maximizeHandler} className={isActive ? 'maximize-active_logo' : 'maximize-inactive_logo'} cx="11.6" cy="11.6" r="11.4" /></svg>
                        </div>
                    }
                    <div
                        className="section-windows-control_box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" strokeLinejoin="round"><circle onClick={window.api.minimizeHandler} className={isActive ? 'minimize-active_logo' : 'minimize-inactive_logo'} cx="11.6" cy="11.6" r="11.4" /></svg>
                    </div>

                </div>
                <div></div>
                <div className="Title-Bar__section-center">
                    <h2 className='text-7xl text-blue-500 font-extrabold'>سیدگَنج</h2>
                    <span className='text-xl'>beta</span>
                </div>
                <div
                    style={isMaximized ? { display: 'none' } : {}}
                    className="resizer">
                </div>
            </div>
        </div >
    )
}

export default Titlebar