import React from 'react'

function IncomeExpense() {
  return (
    <div className='flex h-20 mt-6 justify-around items-center bg-slate-200 shadow-lg rounded-lg'>
      <div >
        <h1>Income</h1>
        <p className='text-green-600'>+$0.00</p>
      </div>
      <div>
        <h1>Expense</h1>
        <p className='text-red-600'>-$0.00</p>
      </div>
    </div>
  )
}

export default IncomeExpense
