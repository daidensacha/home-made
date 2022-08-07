import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Browser } from 'react-router-dom';

import 'normalize.css';
import './index.global.scss';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Browser>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Browser>
);

