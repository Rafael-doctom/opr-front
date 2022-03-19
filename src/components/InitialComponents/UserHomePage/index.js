import React, { useState, useEffect, useRef, useCallback } from "react";
import Menu from "../../Menu/index";
import HeaderBar from "../../HeaderBar/index";
import Requirement from "../../Requirement/";
import ModalNewRequeriments from "../../ModalNewRequeriments/index";
import { useNavigate } from "react-router-dom";
import { Search, AddCircleOutline } from "@material-ui/icons/"

import './styles.css';
import { saveRequirements } from '../../../store/actions/requirementsActor';
import { useDispatch, useSelector } from "react-redux";

export default function UserHomePage() {
    const requirements = useSelector(state => state.requirements.all);
    const [requirementSearchActive, setRequirementSearchActive] = useState(false);
    const [searchKeyword, setSearchKeyword] = useState("");
    const newReqModalRef = useRef();
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const searchRequirements = useCallback(() => {
        // TODO: Criação de funcionalidade de busca de requerimentos
        dispatch(saveRequirements([]));
        // navigate("/requirements", { state: {
        //     searchKeyword: searchKeyword }
        // });
    }, [dispatch]);

    return (
        <div className="user_home_page_container">
            <Menu />
            <HeaderBar />

            <section className="user_home_page_content">
                <div className="user_home_page_title">
                    <h1>Seus Requerimentos</h1>
                    {requirementSearchActive ?
                        <div className="search_input_container">
                            <input 
                                autoFocus 
                                placeholder="Palavra chave" 
                                onBlur={() => setTimeout(() => setRequirementSearchActive(false), 300)}
                                defaultValue={searchKeyword}
                                onChange={(event) => setSearchKeyword(event.target.value)}
                            />
                            <button onClick={() => searchRequirements()}>
                                <Search style={{ color: "#0A68F4"}}/>
                            </button>
                        </div>
                        :
                        <button className="search_requirement_button" onClick={() => setRequirementSearchActive(true)}>Buscar Requerimentos</button>
                    }
                </div>

                <section className="user_home_page-requirements_container">
                    {requirements.map(requirement => {
                        return (
                            <Requirement key={requirement.id} requirement={requirement} />
                        )
                    })}
                </section>
            </section>

            <button className="new_requirement_button" onClick={() => newReqModalRef.current.openModal()}>
                Novo
                <AddCircleOutline />
            </button>

            <ModalNewRequeriments ref={newReqModalRef} />
        </div>
    )
}