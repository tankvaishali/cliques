import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Component/Home/HomePage'
import ContactPage from './Component/Contact/ContactPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App