import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './components/App'


console.log(process.env.NODE_ENV)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode >,
)
