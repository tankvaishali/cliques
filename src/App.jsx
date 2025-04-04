
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Component/Home/HomePage'

function App() {


  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
