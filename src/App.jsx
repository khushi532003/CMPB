import './App.css'
import RootRouting from '@/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <RootRouting />
      <ToastContainer />
    </>
  )
}

export default App;