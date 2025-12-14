import ErrorBoundary from './components/ErrorBoundary.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      {console.log('App Version: HashRouter + ErrorBoundary v1')}
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
