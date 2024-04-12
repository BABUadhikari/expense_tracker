import React from 'react'

function Transaction() {
  return (
    <>
      <div className='mt-3 w-80'>
        <div>
          <h1>History</h1>
          <hr className="h-px bg-gray-100 border-0 dark:bg-gray-400 shadow-xl rounded-lg"></hr>
        </div>
        <div>
          <ul className='mt-4'>
            <li className='flex items-center h-8 justify-between bg-red-500 shadow-xl rounded-lg px-2'>
              Cash <span>-$400</span>
            </li>
          </ul>
        </div>
      </div>

    </>
  )
}

export default Transaction
