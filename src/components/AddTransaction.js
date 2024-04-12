import React from 'react'

const AddTransaction = () => {
  return (
    <div className='mt-3'>
      <div>
        <h1>Add New Transaction</h1>
        <hr class="h-px bg-gray-100 border-0 dark:bg-gray-400 shadow-xl rounded-xl"></hr>
      </div>

      <div className='mt-3'>

        <form>
          <div className='mt-2 '>
            <label htmlFor="text">Text:</label><br />
            <input type="text" placeholder="text.." className='h-8 px-2 w-80 bg-slate-200 shadow-lg rounded-sm ' /><br />
          </div>
          <div className='mt-2'>
            <label htmlFor="amount">Amount:</label><br />
            <input type="text" placeholder='amount' className='h-8 px-2 w-80 bg-slate-200 shadow-lg rounded-sm' /><br />
          </div>

          <button className="text-center mt-3 bg-green-400 py-0.5 rounded-3xl w-80 hover:bg-green-700 ">Add Transaction</button>

        </form>

      </div>

    </div>
  )
}

export default AddTransaction
