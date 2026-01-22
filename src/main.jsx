import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';
import './index.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <ErrorBoundary>
        {console.log('App Version: BrowserRouter + Clean URLs')}
        <App />
      </ErrorBoundary>
    </HelmetProvider>
  </StrictMode>,
)
