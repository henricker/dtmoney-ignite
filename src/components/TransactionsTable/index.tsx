import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

type TransactionType = {
  id: number;
  amount: number;
  title: string;
  category: string;
  type: 'deposit' | 'withdraw';
  createdAt: Date;
}

export function TransactionTable() {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  useEffect(() => {
    api.get('transactions')
    .then((response) => setTransactions(response.data.transactions))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, _) => {
            return (
              <tr key={transaction.id} >
                <td>{transaction.title}</td>
                <td className={transaction.type} >
                  {new Intl.NumberFormat(
                    'pt-BR', { 
                      currency: 'BRL', 
                      style: 'currency' 
                    }).format(transaction.amount)
                  }
                  </td>
                <td>{transaction.category}</td>
                <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
}