import { useState } from 'react'
import RoutePage from './Routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RoutePage></RoutePage>
    </>
  )
}

export default App
