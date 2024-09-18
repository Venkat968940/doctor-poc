import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './components/Store/Store.js'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import axios from 'axios'

const token = localStorage.getItem('token')
const queryClient = new QueryClient()

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization']=`Bearer ${token}`

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
   <QueryClientProvider client={queryClient}><App/></QueryClientProvider>
    </Provider>
  </StrictMode>,
)
