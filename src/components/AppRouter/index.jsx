import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import Accommodation from '../../pages/Accommodation'
import About from '../../pages/About'
import Error from '../Error'
import Header from '../Header'

function AppRouter() {
  return (
    <Router>
        <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/accommodation' element={<Accommodation />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
