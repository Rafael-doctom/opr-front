import React, { useState, useEffect } from "react";
import Menu from "../../Menu/index";
// import HeaderBar from "../../HeaderBar/index";
import Requirement from "../../Requirement/";

import './styles.css';

export default function UserHomePage() {
    const [requirements, setRequirements] = useState([]);

    useEffect(() => {
        return setRequirements(require("../../../service/requirementsJsonMock.json"))
    }, [])

    return (
        <div className="user_home_page_container">
            <Menu />
            {/* <HeaderBar /> */}

            <h1>Seus Requerimentos</h1>

            <section className="requirements_container">
                {requirements.map(requirement => {
                    return (
                        <Requirement requirement={requirement} />
                    )
                })}
            </section>
        </div>
    )
}