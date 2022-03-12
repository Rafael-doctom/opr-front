import React, { useState } from "react";
import Menu from "../../Menu/index";
import Requirement from "../../Requirement/";

import './styles.css';

const requirementsJsonMock = require("../../../api/requirementsJsonMock.json");

export default function UserHomePage() {
    const [requirements, setRequirements] = useState(requirementsJsonMock);

    return (
        <div className="user_home_page_container">
            <Menu />

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