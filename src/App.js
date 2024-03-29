import React from "react";
import "./CSS/index.css"
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import About from "./Pages/About"
import Products from "./Pages/Products"
import Contact from "./Pages/Contact"
import SingleProduct from "./Pages/SingleProduct"
import Cart from "./Pages/Cart";
import Error from "./Pages/Error";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="wrapper">
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
