import React from 'react';
import { Link } from 'react-router-dom';
import "./loginComponent.css";

function Login() {
  return (
    <form>
      <h3>Login</h3>
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
      <div className="mb-3">
        <div className="custom-control custom-checkbox custom-checkbox-spacing">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Salvar
          </label>
        </div>
      </div>
      <div className="d-grid mb-3"> {/* Adicionando a classe mb-3 para espaçamento */}
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>

      <div className="d-grid">
        <p className='cadastrolink'>Ainda Não Possui Conta?</p>
        <Link to="/sign-up" className="btn btn-primary">
          Cadastro
        </Link>
      </div>

      {/* <p className="forgot-password text-right">
        Esqueceu a <a href="#">senha?</a>
      </p> */}
    </form>
  );
}

export default Login;
