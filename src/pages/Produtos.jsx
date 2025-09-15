import { useState, useEffect } from 'react';
import Banner from '../assets/banner-produtos.png';
import CardProduto from './CardProdutos';
import '../assets/styles/Produto.css';

function Produto() {
  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  // Carregar produtos do JSON
  useEffect(() => {
    fetch("/data/produtos.json")
      .then(res => res.json())
      .then(data => setProdutos(data))
      .catch(err => console.error("Erro ao carregar JSON:", err));
  }, []);

  // Lógica do filtro
  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    if (checked) setCategorias([...categorias, value]);
    else setCategorias(categorias.filter(cat => cat !== value));
  };

  const limparFiltro = () => setCategorias([]);

  const produtosFiltrados = categorias.length === 0
    ? produtos
    : produtos.filter(item => categorias.includes(item.categoria));

  const categoriasDisponiveis = [
    "vassouras", "rodos", "suportes", "escovas",
    "pas", "cabos", "acessorios_limpeza",
    "baldes_e_bacias", "lixeiras", "panos",
    "panos_microfibra", "refis"
  ];

  return (
    <>

      <section className="banner">
        <img src={Banner} alt="Banner Produtos" />
      </section>

      <main>
        <section className="sec-produtos">
          <h1>Produtos</h1>
          <div className="produtos-container">

            <div className="filtro">
              <p>Filtro de Produtos</p>
              <div className="filtro-opcoes">
                {categoriasDisponiveis.map(cat => (
                  <label key={cat}>
                    <input
                      type="checkbox"
                      value={cat}
                      checked={categorias.includes(cat)}
                      onChange={handleCheckbox}
                    />
                    {cat
                      .replace(/_/g, ' ')
                      .toLowerCase()
                      .replace(/^\w/, l => l.toUpperCase())
                    }
                  </label>
                ))}
              </div>
              <button onClick={limparFiltro}>Limpar</button>
            </div>

            <div className="produtos">
              {produtosFiltrados.map(item => (
                <CardProduto key={item.id} produto={item} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Produto;
