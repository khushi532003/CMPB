
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextPRovider, ContactContextProvider } from '@/context'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={`${import.meta.env.VITE_APP_CLIENT_ID}`} >
    <AuthContextPRovider>
      <ContactContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </ContactContextProvider>
    </AuthContextPRovider>
  </GoogleOAuthProvider>
)
