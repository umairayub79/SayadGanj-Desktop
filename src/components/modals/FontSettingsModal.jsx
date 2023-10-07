import React from 'react'
import { BaseModal } from './BaseModal'
export const FontSettingsModal = ({ isOpen, handleClose, font, handleFontChange }) => {
    const fonts = ["System Default","Amiri", "Estedad", "Vazirmatn"]

    return (
        <BaseModal title={'نبشتہئے شکل'} isOpen={isOpen} handleClose={handleClose}>
            <div className="flex flex-col mt-2 divide-y">
                {/* font family */}
                <div className="flex justify-between gap-4 p-3">
                    <div className="mt-2">
                        <p className='text-xl'>فونٹ</p>
                    </div>
                    <div>
                        <select className="form-select cursor-pointer outline-none w-full max-w-xs rounded-lg border border-gray-400 dark:border-gray-600 p-1" onChange={(e) => handleFontChange(e.target.value)} defaultValue={font}>
                            {fonts.map((ifont) => (
                                <option key={ifont} value={fonts.indexOf(ifont)} className={"font-" + ifont}>{ifont}</option>
                            ))}
                        </select>
                    </div>
                </div>

            </div>
        </BaseModal>
    )
}