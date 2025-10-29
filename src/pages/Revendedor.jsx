import React from "react";
import "../assets/styles/SerRevendedor.css";
import BannerRevendedor from "../assets/Imgs/SerRevendedor/banner-revendedor.png";
import Confiavel from "../assets/Imgs/SerRevendedor/confiavel-icone.png";
import EntregaRapida from "../assets/Imgs/SerRevendedor/entrega-rapida-icone.png";
import ProdutosDeQualidade from "../assets/Imgs/SerRevendedor/produtos-de-qualidade-icone.png";

const Revendedor = () => {
  const iconesData = [
    { src: EntregaRapida, alt: "Entrega Rápida", texto: "Entrega rápida" },
    {
      src: ProdutosDeQualidade,
      alt: "Produtos de Qualidade",
      texto: "Produtos de qualidade",
    },
    { src: Confiavel, alt: "Confiável", texto: "Confiável" },
  ];

  const passosData = [
    "1.Validar o mercado",
    "2.Testar fornecedores",
    "3.Precificação",
    "4.Lançar vendas",
  ];

  const beneficiosData = [
    "Produtos de qualidade",
    "Flexibilidade",
    "Confiabilidade",
    "Alta lucratividade",
  ];

  return (
    <main>
      <section
        className="revendedor-banner"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <img
          src={BannerRevendedor}
          alt="Banner Rápido, fácil e limpo!"
          className="revendedor-banner-img"
        />
      </section>

      <section className="revendedor-icones">
        <div className="revendedor-icones-wrapper">
          {iconesData.map((icone, index) => (
            <div
              className="revendedor-icone-item"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="revendedor-icone-circle">
                <img src={icone.src} alt={icone.alt} />
              </div>
              <p>{icone.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="revendedor-como-funciona"
        data-aos="fade-in"
        data-aos-duration="1200"
      >
        <h2 data-aos="fade-down" data-aos-delay="200">
          Como funciona?
        </h2>
        <div className="revendedor-como-funciona-conteudo">
          <p data-aos="fade-in" data-aos-delay="400">
            O Programa de Revenda da Produtos Dona foi criado para transformar
            oportunidades em resultados. Qualquer pessoa pode se tornar
            revendedora e lucrar com produtos de limpeza de alta qualidade,
            inovadores e sustentáveis, adquirindo-os a preços acessíveis e com
            grande margem de lucro. Com flexibilidade total, o revendedor pode
            escolher trabalhar com ou sem estoque, adaptando o negócio à sua
            realidade e potencial de vendas. A proposta é simples: você revende
            os produtos em sua cidade, conquista clientes fiéis e cresce junto
            com a marca.
          </p>
        </div>
      </section>

      <section className="revendedor-passo-beneficios-wrapper">
        <div className="revendedor-passo-beneficios">
          <div
            className="revendedor-passo-passo"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h3>Passo a Passo</h3>
            <ul>
              {passosData.map((passo, index) => (
                <li
                  key={index}
                  data-aos="fade-right"
                  data-aos-delay={index * 150 + 200}
                >
                  {passo}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="revendedor-beneficios"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h3>Benefícios</h3>
            <ul>
              {beneficiosData.map((beneficio, index) => (
                <li
                  key={index}
                  data-aos="fade-left"
                  data-aos-delay={index * 150 + 200}
                >
                  {beneficio}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <a
          href="https://wa.me/558892370485"
          target="_blank"
          rel="noopener noreferrer"
          className="revendedor-botao"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          Ser Revendedor
        </a>
      </section>
    </main>
  );
};

export default Revendedor;
