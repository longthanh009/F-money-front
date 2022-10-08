import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import TitleTop from './components/titleTop/TitleTop'
import Unsecured from './pages/admin/installment/Unsecured'
import RoutePage from './Routes'
import './App.css';
import Credit from './pages/admin/credit/Credit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<TitleTop />}>
          <Route index element={<Unsecured />} />
          <Route path='credit' element={<Credit/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
