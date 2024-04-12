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
    <div className='flex  justify-center items-center gap-10 w-100 h-screen  text-slate-800 font-bold font-mono'>
      <div>
        <Header />
        <Balance />
        <IncomeExpense />
        <Transaction />
        <AddTransaction />
      </div>
    </div>
  </React.StrictMode>
);