import React, { useState, useEffect, useRef } from "react";
import Menu from "../../Menu/index";
import HeaderBar from "../../HeaderBar/index";
import Requirement from "../../Requirement/";

import './styles.css';
import ModalNewRequeriments from "../../ModalNewRequeriments/index";

export default function UserHomePage() {
    const [requirements, setRequirements] = useState([]);
    const newReqModalRef = useRef();

    useEffect(() => {
        return setRequirements(require("../../../service/requirementsJsonMock.json"))
    }, [])

    return (
        <div className="user_home_page_container">
            <Menu />
            <HeaderBar />

            <section className="user_home_page_content">
                <div className="user_home_page_title">
                    <h1>Seus Requerimentos</h1>
                    <button className="search_requirement_button">Buscar Requerimentos</button>
                </div>

                <section className="user_home_page-requirements_container">
                    {requirements.map(requirement => {
                        return (
                            <Requirement requirement={requirement} />
                        )
                    })}
                </section>
            </section>

            <button className="new_requirement_button" onClick={() => newReqModalRef.current.openModal()}>Novo</button>

            <ModalNewRequeriments ref={newReqModalRef} />
        </div>
    )
}