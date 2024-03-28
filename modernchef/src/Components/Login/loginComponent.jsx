import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import "./loginComponent.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    const auth = getAuth();
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h3>Login</h3>
      <div className="mb-3">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Senha</label>
        <input
          type="password"
          className="form-control"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <div className="d-grid mb-3">
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
    </form>
  );
}

export default Login;
