import React, { useState, useRef, forwardRef } from "react";
import "./styles.css";
import { Link } from 'react-router-dom';
import { Button, Box, TextField } from "@material-ui/core/";

import {
    AccountCircleRounded as AccountCircleRoundedIcon,
    ThumbUpAltOutlined as ThumbUpAltOutlinedIcon,
    ThumbUpAltRounded as ThumbUpAltRoundedIcon,
    DeleteOutline as DeleteOutlineIcon,
    CloseRounded as CloseRoundedIcon,
    Edit as EditIcon,
    Save as SaveIcon,
  } from "@material-ui/icons/";

import Menu from "../../Menu";
import HeaderBar from "../../HeaderBar/index";
import LegislatorCard from "../../LegislatorCard/index";
import ModalComponent from "../../Modal/index";


export default function Legislator() {

    return (
        <div>
            <Menu> </Menu>

            <HeaderBar />
                      
            <LegislatorCard requeriments={299} analysis={274} denied={10}
            done = {15}>  </LegislatorCard>

            <section className="requirement_content">
                
           
            <Box className="header-profile">

            </Box>
            
            
            <Box className="profile">   
            <AccountCircleRoundedIcon color="action" />     
                <Box className="info">
                <h5>{"Matheus"}</h5>
                <small>{"Campina"}</small>
                </Box>
            </Box>  

            </section>
                        
        </div>
    )
}