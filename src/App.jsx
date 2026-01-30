import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import { useState } from "react";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import ShopPage from "./pages/ShopPage";
import products from "./data/ProductData";
import CartPage from "./pages/CartPage";

function App() {
 
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
setIsOpen(!isOpen)
  }


  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
let validationErrors = {};

    if (!userName) {
      validationErrors.username = "Username is required";
    }

    if (!password) {
      validationErrors.password = "Password is required";
    } else if (password.length < 8 ) {
      validationErrors.password = "Password must be at least 8 characters long.";
      return;
    }

    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
    } else {
      setError({});
      console.log("You are now logged in.");
    }

    
  }

//Initialize cart state

const [cart, setCart] = useState([]);

//Define the handler

const addToCart = (product) => {
  setCart((prevCart) => [...prevCart, product]);
  alert((`${product.item} added to cart!`));
};

const removeFromCart = (indexRemove) => {
  setCart((prevCart) => 
  prevCart.filter((_, index) => index !== indexRemove)
  )
};

  return (
    <div className="app-cont">
    <Navbar toggle={toggle} isOpen={isOpen} cartCount={cart.length} />
    <main>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      <Route path="/about-us" element={<AboutPage/>} />
      <Route path="/shop" 
      element={<ShopPage
      products={products}
      addToCart={addToCart}
      />} />
      <Route path="/404" element={<NotFoundPage/>}/>
      <Route path="/login" 
      element={<LoginPage 
      handleSubmit={handleSubmit}
      userName={userName}
      setUserName={setUserName}
      password={password}
      setPassword={setPassword}
      error={error}
      setError={setError}
      />}/>
      <Route path="/my-cart" element={<CartPage
      cart={cart}
      removeFromCart={removeFromCart}
      />}/>
      </Routes>
      </main>
      <Footer/>
    
    </div>
  )
}

export default App
