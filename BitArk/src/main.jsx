import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home.jsx'
import Crypto from './Crypto.jsx'
import Exchanges from './Exchanges.jsx'
import About from './About.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Crypto' element={<Crypto />} />
        <Route path='/Exchanges' element={<Exchanges />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
