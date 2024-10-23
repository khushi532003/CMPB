
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextPRovider } from '@/context'

createRoot(document.getElementById('root')).render(
  <AuthContextPRovider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextPRovider>
)
