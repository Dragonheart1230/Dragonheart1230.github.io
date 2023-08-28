import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Link, BrowserRouter } from 'react-router-dom'
import './index.css'
import { Test } from './Test'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path='/' >
        <Link to='/Test'>Test</Link>
      </Route>
      <Route path='/Test' >
        <Test />
      </Route>

    </BrowserRouter>
  </React.StrictMode>,
)
