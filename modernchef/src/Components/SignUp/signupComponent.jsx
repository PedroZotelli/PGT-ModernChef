import React, { Component } from 'react';
import { signUpWithEmailPassword } from '../../firebase'; // Importando a função que criamos
import { useNavigate } from 'react-router-dom'; // Importando useNavigate para redirecionamento

export default function SignUp() {
  const navigate = useNavigate(); // Obtendo a função de navegação

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
    try {
      await signUpWithEmailPassword(email, password);
      navigate('/sign-in'); 
    } catch (error) {
      console.error('Erro ao criar usuário:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Cadastro</h3>
      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Digite seu email"
        />
      </div>
      <div className="mb-3">
        <label>Senha</label>
        <input
          type="password"
          className="form-control"
          name="password"
          placeholder="Digite sua senha"
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Cadastrar
        </button>
      </div>
      <p className="forgot-password text-right">
        Já possui <a href="/sign-in">cadastro?</a>
      </p>
    </form>
  );
}
