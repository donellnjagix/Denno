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
          <th className="w-1/6">ID</th>
          <th className="w-2/6">Date</th>
          <th className="w-1/6">Type</th>
          <th className="w-1/6">Amount</th>
          <th className="w-1/6">Status</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>{transaction.date.toLocaleString()}</td>
            <td>{transaction.type}</td>
            <td>${transaction.amount.toLocaleString('en-US')}</td>
            <td>{transaction.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
