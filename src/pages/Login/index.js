import React from "react";

import LoginLogo from "../../assets/LoginLogo.png";
import "./styles.css";

export default function Login() {
  return (
    <div className="login_page_container">
      <div className="login-form-container">
        <div className="titles">
          <div className="title-1">O Povo</div>
          <div className="title-2">REQUER</div>
        </div>
        <div className="inputs">
          <div className="form-title">Login</div>
          <input className="login-input" type="text" placeholder="Email" />
          <input className="password-input" type="password" placeholder="Senha" />
        </div>
        <button className="login-button">Login</button>
      </div>
      <div className="login-logo">
        <img src={LoginLogo} alt="Login Logo" />
      </div>
    </div>
  );
}
