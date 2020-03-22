import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './globalStyles';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './apollo';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
