import "./App.css";
import React from "react";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import Dev from "./pages/Dev";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/dev" element={<Dev />} />
      </Routes>
    </>
  );
}

export default App;
