import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Transaction() {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <div className="mt-3 w-80">
        <div>
          <h1>History</h1>
          <hr className="h-px bg-gray-100 border-0 dark:bg-gray-400 shadow-xl rounded-lg"></hr>
        </div>
        <div>
          <ul className="mt-4">
            {transactions.map((transaction) => {
              return (
                <li
                  className={`${
                    transaction.amount < 0 ? "bg-red-500" : "bg-green-500"
                  } flex items-center h-8  justify-between shadow-xl rounded-lg px-2 py-2"`}
                  key={transaction.id}
                >
                  {transaction.text}{" "}
                  <span>
                    {transaction.amount < 0 ? "-" : "+"}$
                    {Math.abs(transaction.amount)}
                  </span>
                  <button className=" px-2 py-1 rounded">X</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Transaction;
