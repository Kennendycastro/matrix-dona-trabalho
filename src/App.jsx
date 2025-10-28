import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Home from "./pages/Home";
import FaleConosco from "./pages/FaleConosco";
import Produtos from "./pages/Produtos";
import Revendedor from "./pages/Revendedor";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./hooks/ScroolToTop";
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  },[]);


  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FaleConosco" element={<FaleConosco />} />
        <Route path="/Produtos" element={<Produtos />} />
        <Route path="/Revendedor" element={<Revendedor />} />
      </Routes>

      <ScrollToTop />
      <Footer />

    </Router>
  );
}

export default App;