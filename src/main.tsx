import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './globalStyles/normalize.scss'
import './globalStyles/index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
