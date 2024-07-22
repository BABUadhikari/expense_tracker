import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Balance() {
  const { transactions } = useContext(GlobalContext);

  const totalBalance = transactions.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);
  return (
    <div className="flex flex-col justify-start mt-2">
      <h4> Your Balance</h4>
      <h1 className="text-2xl">
        {totalBalance < 0 ? "-" : "+"}${Math.abs(totalBalance)}{" "}
      </h1>
    </div>
  );
}

export default Balance;
