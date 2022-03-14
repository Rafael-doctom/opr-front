import React from "react";
import { Link } from "react-router-dom";

import LoginLogo from "../../assets/LoginLogo.png";
import ProjectLogo from "../../assets/ProjectLogo.png"
import "./styles.css";

export default function Login() {
  return (
    <div className="login_page_container">
      <div className="login_form_container">
        <div className="form_logo">
        <img src={ProjectLogo} alt="Project Logo" />
        </div>
        <div className="inputs">
          <div className="form_title">Login</div>
          <input className="login_input" type="text" placeholder="Email" />
          <input className="password_input" type="password" placeholder="Senha"/>
        </div>
        <button className="login_button">Login</button>
        <div className="login_links">
          <Link className="forgot_my_password_link" to="#">
            Esqueci minha senha
          </Link>
          <Link className="register_link" to="/register">
            Ainda não tenho cadastro
          </Link>
        </div>
      </div>
      <div className="login_logo">
        <img src={LoginLogo} alt="Login Logo" />
      </div>
    </div>
  );
}
