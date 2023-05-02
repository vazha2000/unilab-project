import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Todos from "./pages/Todos";
import Protected from "./components/Protected";
import { AuthProvider } from "./context/AuthContext";
import { AuthContext } from "./context/AuthContext";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route
              path="/"
              element={
                <AuthContext.Consumer>
                  {(context) =>
                    context.isSignedIn ? (
                      <Navigate to="/todo-tasks" replace />
                    ) : (
                      <Home />
                    )
                  }
                </AuthContext.Consumer>
              }
            />
            <Route
              path="/sign-in"
              element={
                <AuthContext.Consumer>
                  {(context) =>
                    context.isSignedIn ? (
                      <Navigate to="/" replace />
                    ) : (
                      <SignIn />
                    )
                  }
                </AuthContext.Consumer>
              }
            />
            <Route
              path="/todo-tasks"
              element={
                <AuthContext.Consumer>
                  {(context) => (
                    <Protected isSignedIn={context.isSignedIn}>
                      <Todos />
                    </Protected>
                  )}
                </AuthContext.Consumer>
              }
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

