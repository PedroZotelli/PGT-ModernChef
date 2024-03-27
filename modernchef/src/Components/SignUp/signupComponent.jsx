import React, { Component } from 'react'
import "./signupComponent.css";

export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Cadastro</h3>
        <div className="mb-3">
          <label>Nome</label>
          <input
            type="text"
            className="form-control"
            placeholder="Digite seu nome"
          />
        </div>
        <div className="mb-3">
          <label>Sobrenome</label>
          <input type="text" className="form-control" placeholder="Digite seu sobrenome" />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Digite seu email"
          />
        </div>
        <div className="mb-3">
          <label>Senha</label>
          <input
            type="password"
            className="form-control"
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
    )
  }
}