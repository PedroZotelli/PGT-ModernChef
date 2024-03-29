import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login/loginComponent';
import SignUp from './Components/SignUp/signupComponent';
import Home from './Components/Home/home'; // Importando o componente de home

import { useAuth } from './firebase'; // Importando o hook useAuth para verificar a autenticação do usuário

function App() {
  const { user } = useAuth(); // Usando o hook useAuth para obter o estado de autenticação do usuário

  return (
    <Router>
   
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/sign-in" element={<Login />}/>
              <Route path="/sign-up" element={<SignUp />} />
              {/* Verifica se o usuário está autenticado */}
              {/* Se sim, redireciona para a página de home */}
              {/* Se não, redireciona para a página de login */}
              <Route path="/home" element={user ? <Home /> : <Navigate to="/home" />} />
            </Routes>
    </Router>
  );
}

export default App;
