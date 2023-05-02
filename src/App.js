import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Todos from "./pages/Todos";
import Protected from "./components/Protected";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(
    localStorage.getItem("username") && localStorage.getItem("photo")
  );

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              isSignedIn ? <Navigate to="/todo-tasks" replace /> : <Home />
            }
          />
          <Route
            path="/sign-in"
            element={
              isSignedIn ? (
                <Navigate to="/" replace />
              ) : (
                <SignIn onSignIn={handleSignIn} />
              )
            }
          />
          <Route
            path="/todo-tasks"
            element={
              <Protected isSignedIn={isSignedIn}>
                <Todos onSignOut={handleSignOut} />
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
