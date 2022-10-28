import React from 'react'

export const Table = ({ columns, data }) => {
    return (
        <div>
            <table className='w-full table-auto border-collapse border'>
            <thead className="border-b">
                    <tr>
                        {columns.map((header, key) => {
                            return (
                                <th className='px-6 py-4 border-r' key={key}>{header}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {data.map((val, key) => {
                        return (
                            <tr key={key} className="border-b">
                                    <td className="text-sm text-gray-900 dark:text-gray-200 font-light px-4 py-2 border-r">{val.num}</td>
                                    <td className="text-sm text-gray-900 dark:text-gray-200 font-light px-4 py-2 border-r">{val.short}</td>
                                    <td className="text-sm text-gray-900 dark:text-gray-200 font-light px-4 py-2 border-r">{val.long}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
