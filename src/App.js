import './assets/styles/App.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './pages/home/Home';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div>
    <Home/>
    </div>
  );
}

export default App;
