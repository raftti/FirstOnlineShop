import React from "react";
import MainMenu from './mailMenu'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";
import Cart from "./cart";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="cart" element={<Cart />}>Cart</Route>
        <Route path="" element={<MainMenu />}>Shop</Route>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
