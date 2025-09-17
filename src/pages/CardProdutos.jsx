import { useState } from 'react';

function CardProduto({ produto }) {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <>
      <div className="card" onClick={() => setModalAberto(true)}>
        <img src={produto.imagem} alt={produto.nome} className="card-imagem" />
        <h2>{produto.nome}</h2>
      </div>

      {modalAberto && (
        <div className="modal-overlay">
          <div className="modal">
            <button
              className="fechar"
              onClick={() => setModalAberto(false)}
              aria-label="Fechar modal"
            >
              X
            </button>
            <div className="modal-content">
              <div className="modal-left">
                <img src={produto.imagem} alt={produto.nome} />
              </div>
              <div className="modal-right">
                <h2>{produto.nome}</h2>
                <ul>
                  {produto.tamanho && <li>Tamanho: {produto.tamanho}</li>}
                  {produto.embalagem && <li>Embalagem: {produto.embalagem}</li>}
                </ul>
                <h3>Características:</h3>
                <ul>
                  {produto.caracteristicas?.map((carac, i) => (
                    <li key={i}>{carac}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CardProduto;
