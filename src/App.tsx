import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Auth } from './pages/Auth'
import GlobalStyles from './styles/GlobalStyles'
import { Register } from './pages/Register'


function App() {
  
  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
          <Route index path='' element={<Auth />} />
          <Route path='dashboard' element={<Home />} />
          <Route path='register' element={<Register/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
