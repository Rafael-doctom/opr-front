import React from "react";
import "./styles.css";
import { Link } from 'react-router-dom';

import Menu from "../../Menu";
import HeaderBar from "../../HeaderBar/index";

export default function Legislator() {
    return (
        <div>
            <Menu> </Menu>

            <HeaderBar />
        </div>
    )
}