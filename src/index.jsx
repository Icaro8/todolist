import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from './styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);
