import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import '@fontsource/khula'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/GlobalStyles'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
)
