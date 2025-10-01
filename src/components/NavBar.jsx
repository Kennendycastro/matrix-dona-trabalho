// src/components/NavBar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from '/logo-dona.png';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        if (!menuOpen) {
            document.body.classList.add('menu-ativo');
        } else {
            document.body.classList.remove('menu-ativo');
        }
    };

    const closeMenu = () => {
        setMenuOpen(false);
        document.body.classList.remove('menu-ativo');
    };

    return (
        <header>
            <div className="nav-bar">
                <img className="logo" src={logo} alt="logo" /> 
                <nav>
                    <div className="menu-hamburguer" onClick={toggleMenu}>
                        <div className="barra"></div>
                        <div className="barra"></div>
                        <div className="barra"></div>
                    </div>
                    <ul className={`itens-c ${menuOpen ? 'menu-aberto' : ''}`}>
                        <li><Link to="/" onClick={closeMenu}>Pagina Inicial</Link></li>
                        <li><Link to="/FaleConosco" onClick={closeMenu}> Fale conosco</Link></li>
                        <li><Link to="/Produtos" onClick={closeMenu}>Produtos</Link></li>
                        <li><Link to="/Revendedor" className="revendedor" onClick={closeMenu}> Ser Revendedor</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;