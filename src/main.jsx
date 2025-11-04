import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './i18n.js'  // Importa la configuración de i18n

const root = ReactDOM.createRoot(document.getElementById('root'))
 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);  