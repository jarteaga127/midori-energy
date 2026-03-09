import { useState, createContext, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {

const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("shoppingCart");
  return savedCart ? JSON.parse(savedCart) : [];
});

useEffect(() => {
  localStorage.setItem("shoppingCart", JSON.stringify(cart));
});

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

const emptyCart = () => {
  if (window.confirm("Are you sure you want to empty your cart now?")) {
setCart([]);
  }
};
//Provide everything via the value prop
return (
<CartContext.Provider value={{ cart, addToCart, removeFromCart, emptyCart }}>
{children}
</CartContext.Provider>
)
};

// Custom hook for easier consumption
export const useCart = () => useContext(CartContext);

