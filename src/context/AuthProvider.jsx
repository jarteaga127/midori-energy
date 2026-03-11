import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {

const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

    const logout = () => {
    setUserName('');
    setPassword('');
    setIsLoggedIn(false);
  };

};

return (
    <AuthContext.Provider value={{ 
      userName, setUserName, 
      password, setPassword, 
      error, setError, 
      handleSubmit, isLoggedIn, logout 
    }}>
      {children}
    </AuthContext.Provider>
  );

export const useAuth = () => useContext(AuthContext);