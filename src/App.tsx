import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import TitleTop from './components/titleTop/TitleTop'
import Unsecured from './pages/admin/Unsecured'
import RoutePage from './Routes'
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<TitleTop />}>
          <Route index element={<Unsecured />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
