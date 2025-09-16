import React from 'react';
import '../assets/styles/SerRevendedor.css';
import BannerRevendedor from '../assets/imgs/SerRevendedor/banner-revendedor.png';
import Confiavel from '../assets/imgs/SerRevendedor/confiavel-icone.png';
import EntregaRapida from '../assets/imgs/SerRevendedor/entrega-rapida-icone.png';
import ProdutosDeQualidade from '../assets/imgs/SerRevendedor/produtos-de-qualidade-icone.png';

const Revendedor = () => {
    const iconesData = [
        { src: EntregaRapida, alt: 'Entrega Rápida', texto: 'Entrega rápida' },
        { src: ProdutosDeQualidade, alt: 'Produtos de Qualidade', texto: 'Produtos de qualidade' },
        { src: Confiavel, alt: 'Confiável', texto: 'Confiável' }
    ];

    const passosData = [
        '1.Validar o mercado',
        '2.Testar fornecedores',
        '3.Organizar precificação',
        '4.Lançar vendas'
    ];

    const beneficiosData = [
        'Produtos de qualidade',
        'Variedade e flexibilidade',
        'Confiabilidade',
        'Alta lucratividade'
    ];
    
    return (
        <main>
            <section className="revendedor-banner">
                <img
                    src={BannerRevendedor}
                    alt="Banner Rápido, fácil e limpo!"
                    className="revendedor-banner-img"
                />
            </section>

            <section className="revendedor-icones">
                <div className="revendedor-icones-wrapper">
                    {iconesData.map((icone, index) => (
                        <div className="revendedor-icone-item" key={index}>
                            <div className="revendedor-icone-circle">
                                <img src={icone.src} alt={icone.alt} />
                            </div>
                            <p>{icone.texto}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="revendedor-como-funciona">
                <h2>Como funciona?</h2>
                <div className="revendedor-como-funciona-conteudo">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </section>

            <section className="revendedor-passo-beneficios-wrapper">
                <div className="revendedor-passo-beneficios">
                    <div className="revendedor-passo-passo">
                        <h3>Passo a Passo</h3>
                        <ul>
                            {passosData.map((passo, index) => (
                                <li key={index}>{passo}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="revendedor-beneficios">
                        <h3>Benefícios</h3>
                        <ul>
                            {beneficiosData.map((beneficio, index) => (
                                <li key={index}>{beneficio}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <button className="revendedor-botao">Ser Revendedor</button>
            </section>
        </main>
    );
};

export default Revendedor;