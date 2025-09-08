
import {Link} from 'react-router-dom';
import './Nav.css';
import  logo from '/logo-dona.png'

function NavBar() {
    return (
        <>
            <header>
                <div className="nav-bar">
                    <nav>
                        <ul className="itens">
                            <img  className= "logo" src= {logo} alt="logo" />
                            <li><Link to="/">Pagina Inicial</Link> </li>
                            <li><Link to= "/FaleConosco"> Fale conosco</Link> </li>
                            <li><Link to= "/Produtos">Produtos</Link> </li>
                            <li><Link to= "/Revendedor" className="revendedor"> Ser Revendedor</Link> </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}


export default NavBar;