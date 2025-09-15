// src/components/Footer.jsx

import React from 'react';
import './Footer.css'; 

import logo from '../assets/logo/logo-dona-icon.ico';
import whatsapp from '../assets/imgs/Footer/whatsapp-logo.png';
import instagram from '../assets/imgs/Footer/instagram-logo.png';
import facebook from '../assets/imgs/Footer/facebook-logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-mid">
          <div>
            <img className="logo-footer" src={logo} alt="Logo Produtos Dona" />
          </div>
          <nav>
            <ul>
              <li><a href="#">home</a></li>
              <li><a href="#">produtos</a></li>
              <li><a href="#">Ser revendedor</a></li>
              <li><a href="#">fale conosco</a></li>
            </ul>
          </nav>
          <div className="social-icons">
            <a href="#" target="_blank" aria-label="WhatsApp">
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

      <div className="footer-bottom">
        <p>Produtos Dona © - Todos os direitos reservados • 2025</p>
      </div>
    </footer>
  );
};

export default Footer;