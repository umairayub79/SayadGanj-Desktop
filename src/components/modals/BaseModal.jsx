import React, { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { RiCloseCircleLine } from 'react-icons/ri'


export const BaseModal = ({ title, children, isOpen, handleClose }) => {
    let closeButtonRef = useRef(null)

    return (
        <Transition.Root
            as={Fragment}
            show={isOpen}>
            <Dialog as="div" initialFocus={closeButtonRef} className="fixed z-10 inset-0 overflow-hidden min-h-screen h-screen" onClose={handleClose}>
                <div className="flex items-center justify-center min-h-screen py-10 px-2 text-center sm:block sm:p-0">
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    {/* This element is for trick the browser into centering the modal contents*/}
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-90"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-0 sm:scale-95">
                        <div className="w-full h-[calc(100vh-70px)] inline-block align-bottom bg-white rounded-lg text-left overflow-auto shadow-xl transform translate-all sm:align-middle sm:max-w-xl sm:w-full dark:bg-gray-800">
                            <div className="absolute sticky top-0 p-2 bg-white dark:bg-gray-800">
                                <RiCloseCircleLine  className="h-6 w-6 cursor-pointer dark:stroke-white" onClick={() => handleClose()} />
                            </div>
                            <div className='p-2'>
                                <div className="text-center">
                                    <Dialog.Title as="h1" className="text-gray-900 dark:text-gray-100">
                                        {title}
                                    </Dialog.Title>
                                </div>
                                <div className='mt-1'>
                                    {children}
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    )
}