import { useState, createContext, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {

const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("shoppingCart");
  return savedCart ? JSON.parse(savedCart) : [];
});

useEffect(() => {
  localStorage.setItem("shoppingCart", JSON.stringify(cart));
}, [cart]);

//Define the handler

//const addToCart = (product) => {
  //setCart((prevCart) => [...prevCart, product]);
  //alert((`${product.item} added to cart!`));
//};

const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if item already exists in cart
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      // If it's a new item, add it with qty: 1
      return [...prevCart, { ...product, qty: 1 }];
    });
    alert((`${product.item} added to cart!`));
  };

//const removeFromCart = (indexRemove) => {
  //setCart((prevCart) => 
  //prevCart.filter((_, index) => index !== indexRemove)
  //)
//};

const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Helper to calculate total for the sidebar
  const getSubtotal = () => cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

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

