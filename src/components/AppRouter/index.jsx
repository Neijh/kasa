import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../Layout'
import Home from '../../pages/Home'
import Accommodation from '../../pages/Accommodation'
import About from '../../pages/About'
import Error from '../Error'

function AppRouter() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Renders the Accommodation component, passing id as a route parameter. */}
          <Route path="/accommodation/:id" element={<Accommodation />} />
          <Route path="/about" element={<About />} />
          {/* It's a catch-all route that matches any other path. */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default AppRouter
