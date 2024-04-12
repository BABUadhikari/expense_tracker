import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import Transaction from './components/Transaction';
import AddTransaction from './components/AddTransaction';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div className='flex  justify-center items-center flex-col w-100 h-screen  text-black-400 font-bold'>
      <div className='w-80'>
        <Header />
        <Balance />
        <IncomeExpense />
        <Transaction />
        <AddTransaction />
      </div>
    </div>
  </React.StrictMode>
);