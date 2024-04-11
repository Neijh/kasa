import React from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './components/AppRouter'
import './styles/index.scss'

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <div className="app-container">
      <AppRouter />
    </div>
  </React.StrictMode>,
)
