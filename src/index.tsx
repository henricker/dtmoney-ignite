import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs'
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => [
      {
        id: 1,
        title: 'Desenvolvimento de website',
        amount: 12000,
        type: 'Desenvolvimento',
        createdAt: new Date()
      },
      {
        id: 2,
        title: 'Aluguel',
        amount: 1100,
        type: 'Casa',
        createdAt: new Date()
      }
    ])
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
