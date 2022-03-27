import React, { useEffect, useRef, useState } from "react";
import Requirement from "../../Requirement/";
import ModalNewRequeriments from "../../ModalNewRequeriments/index";
import { AddCircleOutline } from "@material-ui/icons/";
import usePagination from "../../../hooks/usePagination";
import useRequirements from "../../../hooks/useRequirements";

import { FilterList, CompareArrows } from '@material-ui/icons';

import "./styles.css";

export default function ListRequirements(props) {
  const newReqModalRef = useRef();
  const [ requirementsOffSet, setRequirementsOffSet] = useState(10);
  const [ numberOfPages, setNumberOfPages ] = useState(1);
  const [ ordenationSelectionStatus, setOrdenationSelectionStatus ] = useState(false);
  const [ keywordSelectionStatus, setKeywordSelectionStatus ] = useState(false);
  const [ orderFilter, setOrderFilter] = useState("");
  const [ requirements, fetchRequirements ] = useRequirements(5);
  const [ actualPage, setActualPage ] = usePagination();
  const [ keyword, setKeyword ] = useState(props.keyword);

  useEffect(() => {
    return makeNewRequest();
  }, [actualPage, requirementsOffSet]);

  useEffect(() => {
    if (requirements.length >= requirementsOffSet) {
      const maxPage = Math.min(numberOfPages + 1, actualPage + 1)
      setNumberOfPages(maxPage);
    } else {
      const maxPage = Math.max(numberOfPages - 1, actualPage)
      setNumberOfPages(maxPage);
    }
  }, [requirements])

  async function makeNewRequest() {
    setKeywordSelectionStatus(false);
    setOrdenationSelectionStatus(false);
    await fetchRequirements(actualPage, keyword, orderFilter ? orderFilter : "id", "desc", requirementsOffSet);
  }

  return (
    <div className="list_requirements_page_container">

      <section className="list_requirements_page_content">
        <div className="list_requirements_page_title">
          <h1>Requerimentos encontrados para: “Palavra-chave”</h1>
          {keywordSelectionStatus ?
            <button className="filtering_btn_active" onClick={() => {
                setOrderFilter("")
                setKeywordSelectionStatus(false)
              }}
              >
              <FilterList style={{ color: "#FFFFFF" }} />
              <span>Filtrar</span>
            </button>
            :
            <button className="filtering_btn" onClick={() => setKeywordSelectionStatus(true)}>
              <FilterList style={{ color: "#000000"}} />
            </button>
          }
          {ordenationSelectionStatus ?
            <button className="filtering_btn_active" onClick={() => {
                setOrderFilter("")
                setOrdenationSelectionStatus(false)
              }}
              >
              <CompareArrows style={{ color: "#FFFFFF" }} />
              <span>Ordenar</span>
            </button>
            :
            <button className="filtering_btn" onClick={() => setOrdenationSelectionStatus(true)}>
              <CompareArrows style={{ color: "#000000" }} />
            </button>
          }
        </div>

        {ordenationSelectionStatus &&
          <div className="ordenation_filter_inputs_section">
            <span>Ordenar por:</span>
            <section>
              <input type="radio" id="order_filter_titulo" 
                onClick={(event) => setOrderFilter(event.target.value)} 
                name="requirementOrder" value="titulo"
              />
              <label htmlFor="order_filter_titulo">Titulo</label>
            </section>
            <section>
              <input type="radio" id="order_filter_local" 
                onClick={(event) => setOrderFilter(event.target.value)} 
                name="requirementOrder" value="localidade"
              />
              <label htmlFor="order_filter_local">Localidade</label>
            </section>
            <section>
              <input type="radio" id="order_filter_date" 
                onClick={(event) => setOrderFilter(event.target.value)} 
                name="requirementOrder" value="data"
              />
              <label htmlFor="order_filter_date">Data do ocorrido</label>
            </section>

            <button onClick={() => makeNewRequest()}>Atualizar filtros</button>
          </div>
        }

        {keywordSelectionStatus &&
          <div className="ordenation_filter_inputs_section">
            <span>Nova palavra para busca:</span>
            <section>
              <input 
                type="text"
                className="new_keyword_input"
                placeholder="Ex: alagamento"
                defaultValue={keyword}
                onChange={(event) => setKeyword(event.target.value)} 
              />
            </section>

            <button onClick={() => makeNewRequest()}>Atualizar palavra chave</button>
          </div>
        }

        <div className="number_of_requirements_per_page">
          <h4>Requerimentos por página</h4>
          <div className="btn_area">
            <button
              className={`btn_number_of_requirements ${requirementsOffSet === 5 ? "current" : ""}`}
              onClick={() => setRequirementsOffSet(5)}
            >
              5
            </button>
            <button
              className={`btn_number_of_requirements ${requirementsOffSet === 10 ? "current" : ""}`}
              onClick={() => setRequirementsOffSet(10)}
            >
              10
            </button>
            <button
              className={`btn_number_of_requirements ${requirementsOffSet === 25 ? "current" : ""}`}
              onClick={() => setRequirementsOffSet(25)}
            >
              25
            </button>
          </div>
        </div>

        <section className="list_requirements_page-requirements_container">
          {requirements.length > 0 ? 
            requirements.map((requirement) => {
              return (
                <Requirement key={requirement.id} requirement={requirement} />
              );
            })
            :
            <div className="empty_requirements_container">
              <strong>Não há requerimentos para os valores selecionados!</strong>
            </div>
          }
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
        {Array.from(Array(numberOfPages)).map((_, index) => {
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
