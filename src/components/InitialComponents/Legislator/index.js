import React from "react";
import "./styles.css";
import { Link } from 'react-router-dom';

import Menu from "../../Menu";
import HeaderBar from "../../HeaderBar/index";
import LegislatorCard from "../../LegislatorCard/index";

export default function Legislator() {
    return (
        <div>
            <Menu> </Menu>

            <HeaderBar />
                      
            <LegislatorCard requeriments={299} analysis={274} denied={10}
            done = {15}>  </LegislatorCard>
                        
        </div>
    )
}