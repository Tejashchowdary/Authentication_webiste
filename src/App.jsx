import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated ? <Home /> : <Navigate to="/auth" />}
      />
      <Route path="/auth" element={<Auth setAuth={setIsAuthenticated} />} />
    </Routes>
  );
};

export default App;
