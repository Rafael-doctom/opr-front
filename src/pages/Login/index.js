import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";

import { api } from "../../service/api";

import LoginLogo from "../../assets/LoginLogo.png";
import ProjectLogo from "../../assets/ProjectLogo.png";
import "./styles.css";

export default function Login() {
  const history = useHistory();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        handleLogin(event);
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [login, password]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { token } = await api.post("/cidadao", { login, password });

      localStorage.setItem("@opr/token", token);

      history.push("/home");
    } catch (err) {
      console.log(err.data.response.messagem);
    }
  };

  return (
    <div className="login_page_container">
      <div className="login_form_container">
        <div className="form_logo">
          <img src={ProjectLogo} alt="Project Logo" />
        </div>
        <div className="inputs">
          <div className="login_input">
            <InputMask
              placeholder="CPF"
              className="login_input"
              maskPlaceholder=" "
              mask="999.999.999-99"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
            />
          </div>

          <input
            className="password_input"
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          className="submit_login_button"
          type="submit"
          onClick={handleLogin}
        >
          Login
        </button>
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
