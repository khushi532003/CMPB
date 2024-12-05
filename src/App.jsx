import { useEffect, useRef } from 'react';
import './App.css'
import RootRouting from '@/routes';
import { useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthContext } from './context';

function App() {
  const { setPaths } = useAuthContext();
  const location = useLocation();
  const paths = useRef([]);
  useEffect(() => {

    paths.current = [...paths.current, location.pathname].slice(0, 3);
    setPaths(paths)


  }, [location])


  return (
    <>
      <RootRouting />
      <ToastContainer />
    </>
  )
}

export default App;