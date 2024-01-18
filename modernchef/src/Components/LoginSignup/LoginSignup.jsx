import React, { useState } from "react";
import "./LoginSignup.css";

import email_icon from "../Assets/email_icon.png";
import password_icon from "../Assets/password_icon.png";
import user_icon from "../Assets/user_icon.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Cadastre-se");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Digite seu nome" />
          </div>
        )}
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Senha" />
        </div>
      </div>
      <div className="forgot-password">
        {action === "Cadastre-se" ? (
          <div></div>
        ) : (
          <span>Esqueceu a senha?</span>
        )}
      </div>
      <div className="submit-container">
        <button
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Cadastre-se");
          }}
        >
          Cadastrar
        </button>
        <button
          className={action === "Cadastre-se" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginSignup;
