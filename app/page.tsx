"use client";
import { useState } from 'react';
import Navbar from '../app/components/navbar/Navbar';





const Home: React.FC = () => {
 const [currentAccountBalance, setCurrentAccountBalance] = useState(80040);
 const [savingsAccountBalance, setSavingsAccountBalance] = useState(50000);
 const [depositedMoney, setDepositedMoney] = useState(10000);
 const [withdrawnMoney, setWithdrawnMoney] = useState(10000);

 return (
<div> <Navbar />
  
    <div className="container mx-auto px-4">
      <h1 className="text-center text-3xl mt-4 mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4 shadow">
          <h2 className="text-xl font-bold mb-2">Current Account Balance</h2>
          <p className="text-2xl">${currentAccountBalance.toLocaleString('en-US')}</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow">
          <h2 className="text-xl font-bold mb-2">Savings Account Balance</h2>
          <p className="text-2xl">${savingsAccountBalance.toLocaleString('en-US')}</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow">
          <h2 className="text-xl font-bold mb-2">Deposited Money</h2>
          <p className="text-2xl">${depositedMoney.toLocaleString('en-US')}</p>
        </div>
        <div className="bg-white rounded-lg p-4 shadow">
          <h2 className="text-xl font-bold mb-2">Withdrawn Money</h2>
          <p className="text-2xl">${withdrawnMoney.toLocaleString('en-US')}</p>
        </div>
      </div>
    </div>
    </div>
 );
}

export default Home;