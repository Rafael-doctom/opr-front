import React from "react";

import Menu from "../../components/Menu";
import Carousel from "react-material-ui-carousel";

import CadastroCidadao from "../../assets/CadastroCidadao.png";
import CadastroLegislativo from "../../assets/CadastroLegislativo.png";
import Login from "../../assets/Login.png"
import LoginButton from "../../assets/LoginButton.png"
import "./style.css";

export default function UserGuide() {
  var pages = [
    {
      name: "Onde fazer Login",
      imagea: LoginButton,
      imageb: Login,
      txt:
        "O botão superior direito da tela inicial, sinalizado pela imagem abaixo pela seta laranja, te levará a tela de login.\n" +
        "Caso você não tenha tenha cadastro ainda, basta clicar no link sinalizado pela seta laranja na imagem abaixo.",
    },
    {
      name: "Se atente ao cadastro!",
      imagea: CadastroCidadao,
      imageb: CadastroLegislativo,
      txt:
        "Os cadastros para cidadão e legislador são diferentes. " +
        "Para se cadastrar corretamente, fique atento ao link de cadastro, sinalizado pelas setas laranjas nas imagens.",
    },
    {
      name: "Se atente ao Menu Lateral",
    },
  ];

  return (
    <div className="page_user_guide">
      <Menu />
      <div className="carousel_container">
        <Carousel autoPlay={false}>
          {pages.map((page, index) => (
            <Page page={page} key={index} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

function Page(props) {
  return (
    <div className="user_guide_container">
      <h1>{props.page.name}</h1>
      <div className="description">{props.page.txt} </div>
      <div className="images">
        <div className="image_a">
          <img src={props.page.imagea} alt="Cadastro Cidadão"></img>
        </div>
        <div className="image_b">
          <img src={props.page.imageb} alt="Cadastro de Legislativo"></img>
        </div>
      </div>
    </div>
  );
}
