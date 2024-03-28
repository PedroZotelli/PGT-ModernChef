import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login/loginComponent';
import SignUp from './Components/SignUp/signupComponent';
import Home from './Components/Home/home'; // Importando o componente de home
import Navbar from './Components/Navbar/navbarComponent';
import { useAuth } from './firebase'; // Importando o hook useAuth para verificar a autenticação do usuário

function App() {
  const { user } = useAuth(); // Usando o hook useAuth para obter o estado de autenticação do usuário

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              {/* Verifica se o usuário está autenticado */}
              {/* Se sim, redireciona para a página de home */}
              {/* Se não, redireciona para a página de login */}
              <Route path="/home" element={user ? <Home /> : <Navigate to="/sign-in" />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
