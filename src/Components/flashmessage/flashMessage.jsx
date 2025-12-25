// src/context/FlashMessageContext.js
import React, { createContext, useContext, useState } from "react";

// Create a Context object
const FlashMessageContext = createContext();

// Create a provider component
export const FlashMessageProvider = ({ children }) => {
  const [flashMessage, setFlashMessage] = useState(null); // Initial state

  // Function to show a flash message
  const showFlashMessage = (message) => {
    setFlashMessage(message);
    setTimeout(() => {
      setFlashMessage(null);
    }, 2500);
  };

  return (
    <FlashMessageContext.Provider value={{ flashMessage, showFlashMessage }}>
      {children} {/* All children */}
    </FlashMessageContext.Provider>
  );
};

// Custom hook to use context easily
export const useFlashMessage = () => useContext(FlashMessageContext);
