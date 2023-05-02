import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(
    localStorage.getItem("username") && localStorage.getItem("photo")
  );

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isSignedIn, handleSignIn, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};
