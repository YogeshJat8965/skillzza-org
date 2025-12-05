import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { BrowserRouter } from 'react-router-dom'

// Get the base URL from Vite's environment (removes trailing slash if present)
const basename = import.meta.env.BASE_URL.replace(/\/$/, '');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <Topbar />
      <Navbar />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
