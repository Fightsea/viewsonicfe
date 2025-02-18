import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { startApiServer } from './api/mockServer';

if (import.meta.env.MODE === 'development') {
  startApiServer();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
