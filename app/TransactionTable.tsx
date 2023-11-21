import React from 'react';
import Transaction from './components/types/types';

interface TransactionTableProps {
  transactions: Transaction[];
}

const TransactionTable: React.FC<TransactionTableProps> = ({ transactions }) => {
  return (
    <table className="table-fixed w-full">
      <thead>
        <tr>
          <th className="w-1/6 text-center">ID</th>
          <th className="w-2/6 text-center">Date</th>
          <th className="w-1/6 text-center">Type</th>
          <th className="w-1/6 text-center">Amount</th>
          <th className="w-1/6 text-center">Status</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id} className="hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="text-center">{transaction.id}</td>
            <td className="text-center">{transaction.date.toLocaleString()}</td>
            <td className="text-center">{transaction.type}</td>
            <td className="text-center">${transaction.amount.toLocaleString('en-US')}</td>
            <td className="text-center">{transaction.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
