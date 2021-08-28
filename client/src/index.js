import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundaryFallback from './ErrorBoundaryFallback';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundaryFallback>
        <App />
      </ErrorBoundaryFallback>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();