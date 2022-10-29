import React from 'react';
import { ReactDOM } from 'react';
import { createRoot } from "react-dom/client";
import {App} from './App'
import {Model, Server} from 'miragejs';

new Server({
  models: {
    transaction: Model,
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    });
    
    this.post('/transactions', (schema,request) => {
      const data = JSON.parse(request.requestBody)

      // return the data base (schema), its model (transaction) and the data i want to pass to the model (data)
      return schema.create('transaction', data)
    })
  }
})

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
function createServer(arg0: { routes(): void; }) {
  throw new Error('Function not implemented.');
}

