import React from 'react'
import ReactDOM from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { App } from './components/App'


console.log(process.env.NODE_ENV)
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* //@ts-ignore */}
    {/* <BrowserRouter basename={process.env.NODE_ENV != "development" ? '/' : '/react-vite-gh-pages/'}> */}
    <App />
    {/* </BrowserRouter> */}
  </React.StrictMode >,
)
