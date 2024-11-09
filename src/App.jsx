import React from "react";
import { Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";  // Import Navbar
import Header from "./components/Header";  // Import Header
import GivingBack from "./pages/GivingBack";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/givingback' element={<GivingBack />} />
      </Routes>
 
      <Footer />
    </div>
  );
}

export default App;

