import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/GlobalStyles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
)
