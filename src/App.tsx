import { useState } from 'react'
import RoutePage from './Routes'
import './index.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import 'react-quill/dist/quill.snow.css';
function App() {


  const [count, setCount] = useState(0)
  useEffect(() => {
    AOS.init();
  }, [])

  
  return (
    <div className="App">
      <RoutePage />
    </div>
  )
}

export default App
