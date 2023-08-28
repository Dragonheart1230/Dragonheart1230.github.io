import React, { createContext, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Link, BrowserRouter, Routes } from 'react-router-dom'
import './index.css'
import { Navbar } from './components/Navbar'
import { Layer, Rect, Stage } from 'react-konva'
import { NavMenuButton } from './components/NavMenuButton'
import { App } from './components/App'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode >,
)
