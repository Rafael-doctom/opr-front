import React, { useState, useEffect, useRef } from "react";
import Menu from "../../Menu/index";
import HeaderBar from "../../HeaderBar/index";
import Requirement from "../../Requirement/";
import ModalNewRequeriments from "../../ModalNewRequeriments/index";
import { useNavigate } from "react-router-dom";
import { AddCircleOutline } from "@material-ui/icons/";
import { mockListRequeriments } from "../../../service/api";

import "./styles.css";
import useRequirements from "../../../hooks/useRequirements";

export default function ListRequirements() {
  const [requirementsPerPage, setRequirementsPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(0)
  const [setRequirementSearchActive] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const newReqModalRef = useRef();
  const {requirements, fetchRequirements} = useRequirements(5)

  const navigate = useNavigate();

  useEffect(() => {
    fetchRequirements(1)
  })

  const pages = Math.ceil(requirements.length / requirementsPerPage)

  function setNumberOfRequirements(number) {
    //$('btn_number_of_requirements').removeClass('active')
    //$(this).addClass('active')
    // setPageLimit(number)
  }

  return (
    <div className="user_home_page_container">
      <Menu />
      <HeaderBar />

      <section className="user_home_page_content">
        <div className="user_home_page_title">
          <h1>Requerimentos encontrados para: “Palavra-chave”</h1>
          <button className="btn_filter">F</button>
          <button className="btn_order">O</button>
        </div>

        <div className="number_of_requirements_per_page">
          <h4>Requerimentos por página</h4>
          <div className="btn_area">
            <button className="btn_number_of_requirements" onClick={setNumberOfRequirements(5)}>5</button>
            <button className="btn_number_of_requirements" onClick={setNumberOfRequirements(10)}>10</button>
            <button className="btn_number_of_requirements" onClick={setNumberOfRequirements(25)}>25</button>
          </div>
        </div>

        <section className="user_home_page-requirements_container">
          {requirements.map((requirement) => {
            return (
              <Requirement key={requirement.id} requirement={requirement} />
            );
          })}
        </section>
      </section>

      <button
        className="new_requirement_button"
        onClick={() => newReqModalRef.current.openModal()}
      >
        Novo
        <AddCircleOutline />
      </button>

      <ModalNewRequeriments ref={newReqModalRef} />
    </div>
  );
}
