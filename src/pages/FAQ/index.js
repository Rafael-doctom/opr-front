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
            <Typography> <b>Qual o intuito do sistema?</b></Typography>
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
            <Typography><b>O que motivou a criação do sistema?</b></Typography>
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
            <Typography><b>Existe algum custo para usar o sistema?</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            É gratuito e sempre será.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{color:"#0A68F4"}}/>}
          >
            <Typography><b>Existe um limite de requerimentos que um cidadão pode fazer?</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Colocar resposta aqui
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{color:"#0A68F4"}}/>}
          >
            <Typography><b>Como sei que meu requerimento chegou a um dos legisladores mencionados?</b></Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Quando o status do seu requerimento mudar para "não aceito" ou para "concluído".
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
