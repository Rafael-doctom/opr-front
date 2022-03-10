import React from "react";
import "./styles.css";

import {
    
    LocationOn as LocationIcon,
    Message as MessageIcon,
    House as ComunityIcon,
    
  } from '@material-ui/icons';

import Menu from "../../../components/Menu";


export default function Legislator() {
    return (
        <div>
            <Menu> </Menu>

            <div className="location_icon_and_city">           
            <LocationIcon fontSize = "inherit" className= "location_icon"/>
            <div className="city">Município</div>          
            </div>

            <div className="comunity_icon_and_comunity"> 
            <ComunityIcon fontSize = "inherit" className = "comunity_icon" />
            <div className="comunity">Comunidade</div>
            </div>
            
            <div className="city_button">
            <select className="city_button_style">
            <option value = "Campina Grande"> Campina Grande, PB</option>
            <option value = "Joao Pessoa"> João Pessoa, PB</option>
            </select>
            </div>

            <div className="comunity_button">
            <select className="comunity_button_style">
            <option value = "Todas">Todas</option>
            <option value = "Centro">Centro</option>
            </select>
            </div>

            <div className="container_href">
                <a className="initial_page_link" href="/Initial-Page">
                    Início
                </a>

                <a className="requeriments_link" href="/Requeriments">
                    Requerimentos
                </a>

                <a className="legislators_link" href="/Legislators">
                    Legislativos
                </a>
            </div>
        

            

            
        </div>
    )
}