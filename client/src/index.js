import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import {BrowserRouter as Router }from "react-router-dom"
import { ApolloProvider } from '@apollo/client';
import client from "./apollo"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <ApolloProvider client={client}>

  <Router>
    <App />
    </Router>
    </ApolloProvider>
  </React.Fragment>
);

