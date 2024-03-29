import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    <div className="login-container">
      {/* Lado Esquerdo */}
      <div className="left-side">
        <div className="login-box">
          
          <section className="section_form">
            <h3>Login</h3>
            <form onSubmit={handleLogin} className="feed-form">
              <input 
                required 
                placeholder="E-mail" 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <input 
                required 
                placeholder="Senha" 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
              />
              {error && <p className="error-message">{error}</p>}
              <button type="submit" className="button_submit">Login</button>
            </form>
          </section>
        </div>
      </div>
      {/* Lado Direito */}
      <div className="right-side">
       
      </div>
    </div>
  );
}

export default Login;
