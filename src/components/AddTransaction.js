import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (text || amount) {
      const newTransaction = {
        id: Math.floor(Math.random() * 1000000),
        text,
        amount: +amount,
      };
      addTransaction(newTransaction);
    }
    setText("");
    setAmount("");
  };

  return (
    <div className="mt-3">
      <div>
        <h1>Add New Transaction</h1>
        <hr className="h-px bg-gray-100 border-0 dark:bg-gray-400 shadow-xl rounded-lg"></hr>
      </div>

      <form onSubmit={handleOnSubmit}>
        <div className="mt-2 ">
          <label htmlFor="text">Text:</label>
          <br />
          <input
            type="text"
            placeholder="text.."
            className="h-8 px-2 w-80 bg-slate-200 shadow-lg rounded-lg "
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <br />
        </div>
        <div className="mt-2">
          <label htmlFor="amount">Amount:</label>
          <br />
          <input
            type="number"
            placeholder="0"
            className="h-8 px-2 w-80 bg-slate-200 shadow-lg rounded-lg"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <br />
        </div>

        <button className="text-center mt-3 bg-green-400 py-0.5 rounded-lg w-80 hover:bg-green-700 shadow-xl ">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
