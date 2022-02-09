import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';

type TransactionType = {
  id: number;
  amount: number;
  title: string;
  category: string;
  type: 'deposit' | 'withdraw';
  createdAt: Date;
}

type TransactionsProviderProps = {
  children: ReactNode;
}

type TransactionInputType = Omit<TransactionType, 'id' | 'createdAt'>;

type TransactionsContextDataType = {
  transactions: TransactionType[];
  createNewTransaction: (transaction: TransactionInputType ) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextDataType>({} as TransactionsContextDataType);


export function TransactionsProvider(props: TransactionsProviderProps) {
 
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  async function createNewTransaction(transaction: TransactionInputType): Promise<void> {
    api.post('/transactions', transaction).then((response) => setTransactions([...transactions, response.data.transaction]))
  }
  
  useEffect(() => {
    api.get('transactions')
    .then((response) => setTransactions(response.data.transactions))
  }, []);

  return (
    <TransactionsContext.Provider value={{transactions, createNewTransaction}}>
      { props.children }
    </TransactionsContext.Provider>
  );
}