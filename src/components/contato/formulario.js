import React from 'react';
import './formulario.css'
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Formulario() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const form = useRef(null);

  function sendEmail(e) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      setError('Preencha todos os campos');
      return;
    }

    setLoading(true);

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send('service_ipvum3b', 'template_vr9edao', templateParams, 'fW-9x7noIkhe3sTqP')
      .then(
        (response) => {
          console.log('Email enviado', response.status, response.text);
          setName('');
          setEmail('');
          setMessage('');
          setSuccess(true);
        },
        (err) => {
          console.error('Erro', err);
          setError('Erro ao enviar o email. Por favor, tente novamente.');
        }
      )
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <div className="formulario">
        <h1 className="title">Entre em contato</h1>
        <div className="formulario-card">
          <form ref={form} className="form" onSubmit={sendEmail}>
            <label>Seu nome:</label>
            <input
              className="input"
              type="text"
              placeholder="Digite seu nome"
              onChange={(e) => setName(e.target.value)}
              value={name}
              name="from_name"
            />
            <label>Seu email:</label>
            <input
              className="input"
              type="text"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
            />
            <label>Deixe sua mensagem:</label>
            <textarea
              className="textarea"
              placeholder="Digite sua mensagem..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              name="message"
            />
            <input className="button-form" type="submit" value="Enviar" />
          </form>
    
        </div>
      </div>
    </>
  );
}

export default Formulario;
