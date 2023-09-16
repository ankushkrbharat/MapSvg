import { Route, Routes } from 'react-router-dom'
import './App.css'
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Index from './pages/Index'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Index/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App