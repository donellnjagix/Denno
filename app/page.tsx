"use client"
import React, { useState } from 'react';
import Navbar from '../app/components/navbar/Navbar';
import TransactionTable from './TransactionTable'; // Adjust the import path based on your actual file structure
import Footer from '../app/components/footer/footer';


interface Transaction {
  id: string;
  date: Date;
  type: 'deposit' | 'withdrawal' | 'transfer' | 'other';
  amount: number;
  status: 'pending' | 'completed' | 'failed';
}

const Home: React.FC = () => {
  // Your existing state variables...
  const [currentAccountBalance, setCurrentAccountBalance] = useState(80040);
  const [savingsAccountBalance, setSavingsAccountBalance] = useState(50000);
  const [depositedMoney, setDepositedMoney] = useState(10000);
  const [withdrawnMoney, setWithdrawnMoney] = useState(10000);

  // Additional states for loan-related information
  const [loanLimit, setLoanLimit] = useState(50000);
  const [loanTaken, setLoanTaken] = useState(20000);

  // Sample transaction data
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: '1',
      date: new Date(),
      type: 'deposit',
      amount: 1000,
      status: 'completed',
    },

    {
      id: '2',
      date: new Date(),
      type: 'deposit',
      amount: 1000,
      status: 'completed',
    },

    {
      id: '3',
      date: new Date(),
      type: 'deposit',
      amount: 1000,
      status: 'completed',
    },

    {
      id: '4',
      date: new Date(),
      type: 'deposit',
      amount: 1000,
      status: 'completed',
    },

    {
      id: '5',
      date: new Date(),
      type: 'deposit',
      amount: 1000,
      status: 'completed',
    },

    {
      id: '6',
      date: new Date(),
      type: 'deposit',
      amount: 1000,
      status: 'completed',
    },

    {
      id: '7',
      date: new Date(),
      type: 'deposit',
      amount: 1000,
      status: 'completed',
    },

    {
      id: '8',
      date: new Date(),
      type: 'deposit',
      amount: 8000,
      status: 'completed',
    },


    // Add more transactions as needed...
  ]);

  return (
    <div>
      <Navbar />

      <div className="container mx-auto px-4">
        <h1 className="text-center text-3xl mt-4 mb-8" style={{ color: '#5C9C8C' }}>
          Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* First Row */}
          <div className="bg-SeaportSteam rounded-lg p-4 shadow">
          <h2 className="text-xl font-bold mb-2" style={{ color: '#295B50' }}>
              Current Account Balance
            </h2>
            <p className="text-2xl" style={{ color: '#5C9C8C' }}>
              ${currentAccountBalance.toLocaleString('en-US')}
            </p>
          </div>
          <div className="bg-YuccaCream rounded-lg p-4 shadow">
            <h2 className="text-xl font-bold mb-2" style={{ color: '#295B50' }}>
              Savings Account Balance
            </h2>
            <p className="text-2xl" style={{ color: '#5C9C8C' }}>
              ${savingsAccountBalance.toLocaleString('en-US')}
            </p>
          </div>
          <div className="bg-OldMoney rounded-lg p-4 shadow">
          <h2 className="text-xl font-bold mb-2" style={{ color: '#295B50' }}>
              Deposited Money
            </h2>
            <p className="text-2xl" style={{ color: '#5C9C8C' }}>
              ${depositedMoney.toLocaleString('en-US')}
            </p>
          </div>

          {/* Second Row */}
          <div className="bg-GreyTeal rounded-lg p-4 shadow">
          <h2 className="text-xl font-bold mb-2" style={{ color: '#295B50' }}>
              Withdrawn Money
            </h2>
            <p className="text-2xl" style={{ color: '#5C9C8C' }}>
              ${withdrawnMoney.toLocaleString('en-US')}
            </p>
          </div>
          <div className="bg-MauiBlue rounded-lg p-4 shadow">
          <h2 className="text-xl font-bold mb-2" style={{ color: '#295B50' }}>
              Loan Limit
            </h2>
            <p className="text-2xl" style={{ color: '#5C9C8C' }}>
              ${loanLimit.toLocaleString('en-US')}
            </p>
          </div>
          <div className="bg-TealBayou rounded-lg p-4 shadow">
          <h2 className="text-xl font-bold mb-2" style={{ color: '#295B50' }}>
              Loan Taken
            </h2>
            <p className="text-2xl" style={{ color: '#5C9C8C' }}>
              ${loanTaken.toLocaleString('en-US')}
            </p>
          </div>
        </div>

        {/* Recent Transactions Table */}
        <div className="mt-8">
        <h2 className="text-xl font-bold mb-2" style={{ color: '#295B50' }}>
            Recent Transactions
          </h2>
          <TransactionTable transactions={transactions} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;