import { useState } from 'react'
import './App.css'
import Navbar from './features/User/components/Navbar';
import Home from './features/User/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
    </>
  )
}

export default App;
