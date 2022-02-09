import { useContext } from "react";
import { TransactionsContext } from "../context/TransactionContext";


export function useTransactions() {
  const context = useContext(TransactionsContext);
  return context;
}