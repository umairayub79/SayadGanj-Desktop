import React from 'react'

const Skeleton = () => {
  return (
    <div className="w-[600px] min-w-[400px] tracking-wider leading-10 block m-5 p-6 max-w-sm  rounded-lg border border-gray-200 dark:border-gray-500 shadow-md hover:bg-gray-100 dark:hover:bg-gray-800">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="space-y-3 m-2">
            <div className="w-16 h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skeleton