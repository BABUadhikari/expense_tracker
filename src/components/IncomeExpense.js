import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);
  const incomeBalance = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  const expenseBalance = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <div className="flex h-20 mt-4 justify-around items-center bg-slate-200 shadow-xl rounded-lg">
      <div>
        <h1>Income</h1>
        <p className="text-green-600">+${incomeBalance}</p>
      </div>
      <div>
        <h1>Expense</h1>
        <p className="text-red-600">-${Math.abs(expenseBalance)}</p>
      </div>
    </div>
  );
}

export default IncomeExpense;
