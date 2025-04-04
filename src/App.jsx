
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Component/Main/Footer'

function App() {


  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Footer/>}/>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
