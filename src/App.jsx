import './App.css'
import RootRouting from '@/routes';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
      <RootRouting />
      <Toaster />
    </>
  )
}

export default App;
