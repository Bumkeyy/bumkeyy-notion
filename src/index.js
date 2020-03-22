import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import './GlobalStyles';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './apollo';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
