import React from 'react'
import ReactDOM from 'react-dom'
// import Layout from './components/Layout'
import AppRouter from './components/AppRouter'
import './styles/index.scss'

ReactDOM.render(
  <React.StrictMode>
    <div className="app-container">
      <AppRouter />
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
)
