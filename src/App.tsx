import { useState } from 'react'
import RoutePage from './Routes'
import './index.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <RoutePage/>
    </div>
  )
}

export default App