import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './src/redux/app/store.js';
import { Provider } from 'react-redux'

ReactDOM.render(
  // Implement Provider component with store below
  <Provider store={store}>
    <App />
   </Provider> ,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

