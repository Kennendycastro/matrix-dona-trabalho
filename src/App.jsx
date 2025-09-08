import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import FaleConosco from './pages/FaleConosco';
import Produto from './pages/Produtos';
import Revendedor from './pages/Revendedor';
import NavBar from './components/NavBar';

function App() {


  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          
          <Route path='/' element={<Home />} />
          <Route path='/FaleConosco' element={<FaleConosco />} />
          <Route path='/Produto' element={<Produto />} />
          <Route path='/Revendedor' element={<Revendedor />} />

        </Routes>
      </Router>
    </>
  )
}

export default App;
