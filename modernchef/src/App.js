import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login/loginComponent';
import SignUp from './Components/SignUp/signupComponent';
import Home from './Components/Home/home';
import Navbar from './Components/Navbar/navbarComponent';

import { useAuth } from './firebase';

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<SignUp />} />
        {/* Verifica se o usuário está autenticado */}
        {/* Se sim, redireciona para a página de home */}
        {/* Se não, redireciona para a página de login */}
        <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
