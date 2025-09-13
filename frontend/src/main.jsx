import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from './context/ThemeContext'
import ContactBar from './components/Contactbar'
import Topbar from './components/Topbar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ContactBar />
      <Topbar />
      <Navbar />
      <App />
      <Footer />
  </React.StrictMode>,
)
