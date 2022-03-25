import React from "react";

import Menu from "../../components/Menu";
import Carousel from "react-material-ui-carousel";

import CadastroCidadao from "../../assets/CadastroCidadao.png";
import CadastroLegislativo from "../../assets/CadastroLegislativo.png";
import "./style.css";

export default function UserGuide() {
  var pages = [
    {
      name: "Se atente ao cadastro!",
      imagea: CadastroCidadao,
      imageb: CadastroLegislativo,
      txt:
        "Os cadastros para cidadão e legislador são diferentes." +
        "Para se cadastrar corretamente, fique atento ao link de cadastro, sinalizado pelas setas laranjas nas imagens.",
    },
    {
      name: "def",
    },
    {
      name: "ghi",
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
