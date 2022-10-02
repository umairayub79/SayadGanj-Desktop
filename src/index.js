import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Titlebar from './components/Titlebar/Titlebar';
import { ToastProvider } from './context/ToastContext';
import ToastContainer from './components/Toast/ToastContainer'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter basename='/'>
      <Titlebar />
      <ToastProvider>
        <App />
        <ToastContainer />
      </ToastProvider>
    </HashRouter>
  </React.StrictMode>
);