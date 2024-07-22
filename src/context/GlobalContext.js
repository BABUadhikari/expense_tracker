import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [
    {
      id: 1,
      text: "Grocery Shopping",
      amount: -50,
    },
    {
      id: 2,
      text: "Salary",
      amount: 1500,
    },
    {
      id: 3,
      text: "Car Maintenance",
      amount: -200,
    },
    {
      id: 4,
      text: "Stock Investment",
      amount: 300,
    },
    {
      id: 5,
      text: "Electricity Bill",
      amount: -100,
    },
  ],
};

// createing context
export const GlobalContext = createContext(initialState);

// context provider

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };
  const addTransaction = (transactions) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transactions,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {" "}
      {children}
    </GlobalContext.Provider>
  );
};
