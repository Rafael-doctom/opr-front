import React from "react";

import LoginLogo from "../../assets/LoginLogo.png";
import ProjectLogo from "../../assets/ProjectLogo.png"
import "./styles.css";

export default function Login() {
  return (
    <div className="login_page_container">
      <div className="login-form-container">
        <div className="form-logo">
        <img src={ProjectLogo} alt="Projetc Logo" />
        </div>
        <div className="inputs">
          <div className="form-title">Login</div>
          <input className="login-input" type="text" placeholder="Email" />
          <input className="password-input" type="password" placeholder="Senha"/>
        </div>
        <button className="login-button">Login</button>
        <div className="login-links">
          <a className="forgot-my-password-link" href="#">
            Esqueci minha senha
          </a>
          <a className="register-link" href="/register">
            Ainda não tenho cadastro
          </a>
        </div>
      </div>
      <div className="login-logo">
        <img src={LoginLogo} alt="Login Logo" />
      </div>
    </div>
  );
}
