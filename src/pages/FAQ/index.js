import React from "react";
import Menu from "../../components/Menu";
import HeaderBar from "../../components/HeaderBar";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./styles.css";
import { red } from "@material-ui/core/colors";

export default function FAQ() {
  return (
    <div>
        <Menu />
        <HeaderBar />
      <div className="faq_container">
          <div className="faq_title"> Perguntas Frequentes</div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{color:"#0A68F4"}} />}     
          >
            <Typography>Qual o intuito do sistema?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Dar voz às comunidades para que o exercício da cidadania seja garantido, pois aquilo que o Povo Requer deve ser a força motriz do Estado.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{color:"#0A68F4"}}/>}
          >
            <Typography>O que motivou a criação do sistema?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            A falta de um instrumento que permita que um indivíduo, de forma simples, tenha a possibilidade de levar ao conhecimento da câmara legislativa as necessidades de sua comunidade.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{color:"#0A68F4"}}/>}
          >
            <Typography>Insira uma pergunta</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            resposta aqui
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
