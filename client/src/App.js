import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from "./components/ProtectedRoute.js";
import PublicRoute from "./components/PublicRoute.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import HomePage from "./pages/HomePage.js";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
