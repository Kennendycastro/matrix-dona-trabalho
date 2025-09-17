import BannerInicio from "../assets/banner-inicial.png"
import ImagSobre from "../assets/img-sobre.png"
import Passo1 from "../assets/telefone.png"
import Passo2 from "../assets/usuarios.png"
import Passo3 from "../assets/cesta.png"
import "../assets/styles/Home.css"
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <>

            <section className="banner">
                <img src={BannerInicio} alt="banner" />
            </section>

            <main>
                <section className="section">
                    <div className="sobre-texto">
                        <h1>Quem é <span className="pink">DONA?</span></h1>
                        <hr />
                        <p>
                            A Produtos Dona é uma empresa dedicada a oferecer soluções inovadoras em limpeza, com qualidade e responsabilidade ambiental. Nosso compromisso é facilitar o dia a dia dos lares e empresas, unindo tecnologia avançada, sustentabilidade e cuidado em cada detalhe.Guiados por objetivos claros, buscamos constantemente a inovação contínua, a satisfação dos nossos clientes e o crescimento global, sem abrir mão da educação ambiental e da sustentabilidade aprofundada.
                            <br /><br />
                            Nossos valores refletem quem somos: acreditamos na inovação sustentável, na excelência, no cuidado com as pessoas e com o meio ambiente, na responsabilidade ambiental e na transparência em todas as nossas relações.

                            Mais do que produtos de limpeza, entregamos confiança, eficiência e respeito ao futuro do planeta, construindo um caminho sólido para um mundo mais limpo e sustentável.
                        </p>
                    </div>
                    <div className="sobre-texto-img">
                        <img src={ImagSobre} alt="imagam" />
                    </div>
                </section>

                <section className="section">
                    <div className="como-funciona">
                        <h2>Como Funciona</h2>
                        <hr />
                        <p>Rápido, fácil e <span className="pink">limpo</span></p>
                        <div className="como-funciona-container">

                            <div className="como-funciona-item">
                                <div className="como-funciona-img">
                                    <img src={Passo1} alt="" />
                                </div>
                                <h3>Entre em contato</h3>
                                <div className="como-funciona-descricao">
                                    <p>Quer fazer parte do time Dona? Para se tornar um revendedor oficial, entre em contato conosco pela pagina Ser revendedor e informe seu interesse. Nossa equipe terá prazer em explicar todos os benefícios e vantagens de fazer parte da nossa rede de parceiros.</p>
                                </div>
                            </div>

                            <div className="como-funciona-item">
                                <div className="como-funciona-img">
                                    <img src={Passo2} />
                                </div>
                                <h3>Fale com a equipe</h3>
                                <div className="como-funciona-descricao">
                                    <p>Fale com a Equipe Dona! Nossa equipe está pronta para conhecer o seu perfil, entender suas necessidades e mostrar todas as possibilidades para que você encontre a melhor forma de se tornar um revendedor. Juntos, vamos definir o caminho ideal para que você faça parte do nosso time com segurança, praticidade e o suporte que precisa para crescer.</p>
                                </div>
                            </div>

                            <div className="como-funciona-item">
                                <div className="como-funciona-img">
                                    <img src={Passo3} />
                                </div>
                                <h3>Revenda!</h3>
                                <div className="como-funciona-descricao">
                                    <p>Revender com a Dona é a oportunidade perfeita para transformar dedicação em resultados. Ao se tornar um revendedor, você conta com produtos de qualidade, suporte da nossa equipe e toda a orientação necessária para conquistar seus clientes. Comece hoje mesmo e descubra como é simples e vantajoso revender com a Dona!</p>
                                </div>
                            </div>

                        </div>
                        {/* Botão abaixo dos itens */}
                        <button
                            className="btn-revendedor"
                            onClick={() => navigate("/Revendedor")}
                        >
                            Quero ser revendedor
                        </button>
                    </div>

                </section>
            </main>
        </>
    )
}



export default Home;