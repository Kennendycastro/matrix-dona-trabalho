// src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom'; 
import './Footer.css'; 

import logo from '../assets/Imgs/Footer/logo-dona-icon.ico';
import whatsapp from '../assets/Imgs/Footer/whatsapp-logo.png';
import instagram from '../assets/Imgs/Footer/instagram-logo.png';
import facebook from '../assets/Imgs/Footer/facebook-logo.png';

const Footer = () => {
  return (
    // Adiciona a animação principal ao footer
    <footer data-aos="fade-up" data-aos-duration="1000"> 
      <div className="footer-top">
        {/* Adiciona um atraso para os itens internos aparecerem depois */}
        <div className="footer-mid" data-aos="fade-in" data-aos-delay="200">
          <div>
            <img className="logo-footer" src={logo} alt="Logo Produtos Dona" />
          </div>
          <nav>
            <ul>
              <li><Link to="/">home</Link></li>
              <li><Link to="/produtos">produtos</Link></li>
              <li><Link to="/revendedor">ser revendedor</Link></li>
              <li><Link to="/faleconosco">fale conosco</Link></li>
            </ul>
          </nav>
          <div className="social-icons">
            {/* Opcional: Você pode adicionar data-aos individualmente aqui também */}
            <a href="https://wa.me/5511987654321" target="_blank" aria-label="WhatsApp">
              <img src={whatsapp} alt="Ícone do WhatsApp" />
            </a>
            <a href="#" target="_blank" aria-label="Instagram">
              <img src={instagram} alt="Ícone do Instagram" />
            </a>
            <a href="#" target="_blank" aria-label="Facebook">
              <img src={facebook} alt="Ícone do Facebook" />
            </a>
          </div>
        </div>
      </div>

      {/* Animação com um atraso maior para aparecer por último */}
      <div className="footer-bottom" data-aos="fade-in" data-aos-delay="400"> 
        <p>Produtos Dona © - Todos os direitos reservados • 2025</p>
      </div>
    </footer>
  );
};

export default Footer;