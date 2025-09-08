import BannerInicio from "../assets/banner-inicial.png"
import ImagSobre from "../assets/img-sobre.png"
import Passo1 from "../assets/telefone.png"
import Passo2 from "../assets/usuarios.png"
import Passo3 from "../assets/cesta.png"
import "../assets/styles/Home.css"

function Home() {
    return (
        <>

            <section className="banner">
                <img  src={BannerInicio} alt="banner" />
            </section>

            <main>
                <section className="section">
                    <div className="sobre-texto">
                        <h1>Quem é <span className="pink">DONA?</span></h1>
                        <hr />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex blanditiis saepe tenetur ad eius
                            inventore iure ratione distinctio asperiores corrupti? Libero exercitationem temporibus animi
                            soluta numquam a quo illo minus.
                            <br /><br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptates omnis similique cum
                            adipisci quidem obcaecati ullam consectetur numquam dolores? Enim natus consectetur libero eaque
                            animi, dolores est asperiores quis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Similique illo exercitationem tempore quidem itaque, voluptatibus iste reiciendis, vel quaerat
                            unde veniam! Aliquam ab reiciendis ipsa nulla quae odit porro repudiandae.
                        </p>
                    </div>
                    <div className="sobre-texto-img">
                        <img  src ={ImagSobre}  alt ="imagam"/>
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
                                    <img src= {Passo1} alt="" />
                                </div>
                                <h3>Entre em contato</h3>
                                <div className="como-funciona-descricao">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo possimus
                                        temporibus odio iste soluta in amet laboriosam commodi corrupti alias, quidem illum.
                                        Modi et accusamus recusandae pariatur! Fugit, quae. Mollitia.</p>
                                </div>
                            </div>

                            <div className="como-funciona-item">
                                <div className="como-funciona-img">
                                    <img  src = {Passo2}/>
                                </div>
                                <h3>Fale com a equipe</h3>
                                <div className="como-funciona-descricao">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo possimus
                                        temporibus odio iste soluta in amet laboriosam commodi corrupti alias, quidem illum.
                                        Modi et accusamus recusandae pariatur! Fugit, quae. Mollitia.</p>
                                </div>
                            </div>

                            <div className="como-funciona-item">
                                <div className="como-funciona-img">
                                    <img src= {Passo3} />
                                </div>
                                <h3>Revenda!</h3>
                                <div className="como-funciona-descricao">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo possimus
                                        temporibus odio iste soluta in amet laboriosam commodi corrupti alias, quidem illum.
                                        Modi et accusamus recusandae pariatur! Fugit, quae. Mollitia.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}



export default Home;