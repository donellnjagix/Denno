// src/types.ts

type Transaction = {
    id: string;
    date: Date;
    type: 'deposit' | 'withdrawal' | 'transfer' | 'other';
    amount: number;
    status: 'pending' | 'completed' | 'failed';
  };
  
  export default Transaction;
  