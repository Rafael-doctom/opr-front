import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

import { LocationOn as LocationIcon } from '@material-ui/icons';

export default function HeaderBar() {
    function isActiveRoute(routeName) {
        if(window.location.href.indexOf(routeName) > -1) {
            return "active"
        }
    }

    return (
        <section className="pages_header">
            <div className="container_href">
                <Link className={`header_redirect_link ${isActiveRoute("home")}`} to="/home">
                    Início
                </Link>

                <Link className={`header_redirect_link ${isActiveRoute("requirements")}`} to="/requirements">
                    Requerimentos
                </Link>

                <Link className={`header_redirect_link ${isActiveRoute("legislator")}`} to="/legislators">
                    Legislativos
                </Link>
                
            </div>
            
            <section className="locations_infos">
                <div className="location_icon_and_city">           
                    <LocationIcon fontSize = "inherit" className= "location_icon"/>
                    <div className="city">Município</div>          
                </div>

                <div className="city_button">
                    <select className="city_button_style">
                        <option value = "Campina Grande"> Campina Grande, PB</option>
                        <option value = "Joao Pessoa"> João Pessoa, PB</option>
                    </select>
                </div>
            </section>
        </section>
    )
}