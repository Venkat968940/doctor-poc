import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './components/Store/Store.js'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <GoogleOAuthProvider clientId='661535884561-r410jmmn4t8khc4lel4jigk0q0nlmj9e.apps.googleusercontent.com'><App /></GoogleOAuthProvider>
    </Provider>
  </StrictMode>,
)
