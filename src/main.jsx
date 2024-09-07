import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Body from './Body.jsx'
import Header from './Header.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Body />
  </StrictMode>,
)
