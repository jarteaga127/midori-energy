import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import AboutPage from "./pages/AboutPage"
import HomePage from "./pages/HomePage"
import { useState } from "react"

function App() {
 
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
setIsOpen(!isOpen)
  }


  return (
    <>
      <Navbar toggle={toggle} isOpen={isOpen} />
      <Routes>
        <Route path="/" element={<HomePage/>} />
      <Route path="/about-us" element={<AboutPage/>} />
      
      </Routes>
      <Footer/>
    </>
  )
}

export default App
