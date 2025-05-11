import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './router/Router'
import { GlobalStyles } from './styles/GlobalStyles'
import Navbar from './components/navbar/Navbar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
  </StrictMode>,
)
