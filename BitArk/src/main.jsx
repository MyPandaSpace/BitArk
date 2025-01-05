import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Home.jsx'
import NEWS from './NEWS.jsx'
import Crypto from './Crypto.jsx'
import FaqPage from './FaqPage.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/NEWS' element={<NEWS />} />
        <Route path='/Crypto' element={<Crypto />} />
        <Route path='/FAQ' element={<FaqPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
)
