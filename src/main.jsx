import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Disable StrictMode to prevent double initialization of Leaflet maps
// In production, this won't affect behavior, but in development it prevents
// the "Map container is already initialized" error
createRoot(document.getElementById('root')).render(
  <App />
)
