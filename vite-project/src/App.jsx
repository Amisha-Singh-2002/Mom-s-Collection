import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Product from './Product'
import Navbar from './Navbar'
import  AuroraHero  from './AuroraHero'
function App() {
 

  return (
  
      
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
         
          
          <Route path="/product/:id" element={<Product/>} />

          <Route path="*" element={<AuroraHero/>} />

          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
  )
}

export default App;