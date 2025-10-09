import React, { useState, useEffect } from 'react';
import HomemNotebook from '../assets/Imgs/FaleConosco/homem-notebook.jpg'
import '../assets/styles/FaleConosco.css';

const FaleConosco = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [statusMessage, setStatusMessage] = useState({
    text: '',
    type: ''
  });

  useEffect(() => {
    if (statusMessage.text) {
      const timer = setTimeout(() => {
        setStatusMessage({ text: '', type: '' });
      }, 5000); 
      return () => clearTimeout(timer);
    }
  }, [statusMessage]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nome || !email || !assunto || !mensagem) {
      setStatusMessage({
        text: 'Por favor, preencha todos os campos!',
        type: 'erro'
      });
      return;
    }

    setStatusMessage({
      text: 'Mensagem enviada com sucesso!',
      type: 'sucesso'
    });

    setNome('');
    setEmail('');
    setAssunto('');
    setMensagem('');
  };

  return (
    <main>
      <section className="contato">
        <div className="contato-container">
          <div className="imagem-lado">
            {}
          </div>
          
          <div className="form-lado">
            <h2>Fale Conosco!</h2>
            <form id="form-contato" onSubmit={handleSubmit}>
              <label htmlFor="nome">Nome</label>
              <input 
                type="text" 
                id="nome" 
                name="nome" 
                placeholder="Insira seu nome completo aqui..." 
                required 
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />

              <label htmlFor="email">E-mail</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Informe o seu e-mail..." 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="assunto">Assunto</label> 
              <input 
                type="text" 
                id="assunto" 
                name="assunto" 
                placeholder="Dê um título a sua mensagem..." 
                required 
                value={assunto}
                onChange={(e) => setAssunto(e.target.value)}
              />

              <label htmlFor="mensagem">Mensagem</label>
              <textarea 
                id="mensagem" 
                name="mensagem" 
                placeholder="Sua mensagem aqui..." 
                rows="6" 
                required 
                maxLength="500" 
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
              ></textarea>
              <div id="contador">{mensagem.length} / 500</div>

              <button type="submit">Enviar</button>

              {}
              <div className={`mensagem-status mensagem-${statusMessage.type} ${statusMessage.text ? 'visivel' : ''}`}>
                {statusMessage.text}
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FaleConosco;