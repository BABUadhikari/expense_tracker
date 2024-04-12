import React, { useState } from 'react'

const AddTransaction = () => {

  const [text, setText] = useState("");
  const [amount, setAmount] = useState()


  return (
    <div className='mt-3'>
      <div>
        <h1>Add New Transaction</h1>
        <hr className="h-px bg-gray-100 border-0 dark:bg-gray-400 shadow-xl rounded-lg"></hr>
      </div>

      <form >
        <div className='mt-2 '>
          <label htmlFor="text">Text:</label><br />
          <input type="text" placeholder="text.." className='h-8 px-2 w-80 bg-slate-200 shadow-lg rounded-lg ' value={text} onChange={(e) => setText(e.target.value)} /><br />
        </div>
        <div className='mt-2'>
          <label htmlFor="amount">Amount:</label><br />
          <input type="text" placeholder='amount..' className='h-8 px-2 w-80 bg-slate-200 shadow-lg rounded-lg' value={amount} onChange={(e) => setAmount(e.target.value)} /><br />
        </div>

        <button className="text-center mt-3 bg-green-400 py-0.5 rounded-lg w-80 hover:bg-green-700 shadow-xl ">Add Transaction</button>

      </form>
    </div>
  )
}

export default AddTransaction
