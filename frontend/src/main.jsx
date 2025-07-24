import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TestApp from './TestApp.jsx'

// Switch back to your main app
const AppToRender = App; // Changed back to App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppToRender />
  </StrictMode>,
)
