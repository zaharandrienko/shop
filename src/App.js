import React from "react";
import { Routes, Route } from "react-router-dom";

import "./scss/app.scss";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFoun from "./pages/NotFound";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFoun />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
