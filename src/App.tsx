import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Auth } from './pages/Auth'
import GlobalStyles from './styles/GlobalStyles'


function App() {
  
  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
          <Route index path='' element={<Auth />} />
          <Route path='dashboard' element={<Home />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
