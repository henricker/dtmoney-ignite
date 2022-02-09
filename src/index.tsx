import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer de website',
          type: 'deposit',
          category: 'development',
          amount: 12000,
          createdAt: new Date('2022-02-08 09:00:00')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'development',
          amount: 1100,
          createdAt: new Date('2022-02-14 11:00:00')
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => this.schema.all('transaction'))

    this.post('/transactions', (_, request) => {
      const data = JSON.parse(request.requestBody);
      return this.schema.create('transaction', {...data, createdAt: new Date()});
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
