import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import { useState } from "react";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";

function App() {
 
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
setIsOpen(!isOpen)
  }


  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
    const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    

    setError('');

    if (!userName || !password ) {
      setError('Both fields are required!');
      return;
    }

    if (password.length < 8 ) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    console.log("You are now logged in.");
  }



  return (
    <div className="app-cont">
    <Navbar toggle={toggle} isOpen={isOpen} />
    <main>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      <Route path="/about-us" element={<AboutPage/>} />
      <Route path="/404" element={<NotFoundPage/>}/>
      <Route path="/login" 
      element={<LoginPage 
      handleSubmit={handleSubmit}
      userName={userName}
      setUserName={setUserName}
      password={password}
      setPassword={setPassword}
      error={error}
      />}/>
      </Routes>
      </main>
      <Footer/>
    
    </div>
  )
}

export default App
