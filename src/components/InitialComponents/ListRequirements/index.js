import React, { useEffect, useRef } from "react";
import Menu from "../../Menu/index";
import HeaderBar from "../../HeaderBar/index";
import Requirement from "../../Requirement/";
import ModalNewRequeriments from "../../ModalNewRequeriments/index";
import { AddCircleOutline } from "@material-ui/icons/";
import { mockListRequeriments } from "../../../service/api";
import usePagination from "../../../hooks/usePagination";
import useRequirements from "../../../hooks/useRequirements";

import { FilterList, CompareArrows } from '@material-ui/icons';

import "./styles.css";

export default function ListRequirements() {
  const newReqModalRef = useRef();
  const [ requirements, fetchRequirements ] = useRequirements(5);
  const [ actualPage, setActualPage ] = usePagination();

  useEffect(() => {
    fetchRequirements(actualPage);
  }, [actualPage]);

  function setNumberOfRequirements(number) {
    
  }

  return (
    <div className="user_home_page_container">
      <Menu />
      <HeaderBar />

      <section className="user_home_page_content">
        <div className="user_home_page_title">
          <h1>Requerimentos encontrados para: “Palavra-chave”</h1>
          <button className="filtering_btn">
            <FilterList style={{ color: "#000000"}} />
          </button>
          <button className="filtering_btn">
            <CompareArrows style={{ color: "#000000" }} />
          </button>
        </div>

        <div className="number_of_requirements_per_page">
          <h4>Requerimentos por página</h4>
          <div className="btn_area">
            <button
              className="btn_number_of_requirements"
              onClick={setNumberOfRequirements(5)}
            >
              5
            </button>
            <button
              className="btn_number_of_requirements"
              onClick={setNumberOfRequirements(10)}
            >
              10
            </button>
            <button
              className="btn_number_of_requirements"
              onClick={setNumberOfRequirements(25)}
            >
              25
            </button>
          </div>
        </div>

        <section className="user_home_page-requirements_container">
          {requirements && requirements.map((requirement) => {
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

      <div className="btn_container">
        {mockListRequeriments && mockListRequeriments.map((_, index) => {
          return (
            <button
              className={`btn_page ${actualPage === (index + 1) ? "actual_page" : ""}` }
              key={index}
              onClick={() => {setActualPage(index + 1)}}
            >
              {index + 1}
            </button>
          );
        })}
      </div>

      <ModalNewRequeriments ref={newReqModalRef} />
    </div>
  );
}
