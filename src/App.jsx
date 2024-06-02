import {  Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./views/Home"
import Contacto from "./views/Contacto"



function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
      </Routes>
    </>
  )
}

export default App
