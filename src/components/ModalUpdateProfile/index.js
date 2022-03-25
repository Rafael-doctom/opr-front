import React, { forwardRef, useEffect, useState } from "react";
import { Button, Box, Grid } from "@material-ui/core/";
import { Avatar } from "@material-ui/core";
import Modal from "../Modal";
import { useUser} from '../../contexts/userContext';
import "./styles.css";
import {  validateEmail } from '../../utils/validators';
import { updateCitizen } from "../../service/citizen.service";
import { updateLegislator } from "../../service/legislator.service";
import { useNavigate } from "react-router-dom";

const ModalUpdateProfile = forwardRef((props, modalRef) => {
  const { currentUser, setCurrentUser, updateUser } = useUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const [isCitizen, setIsCitizen] = useState(!!currentUser.partido);


  const navigate = useNavigate();

  useEffect(() => {
    
        if (!!name && !!state && !!city && !!email) {
            let isValid = true;
            isValid = validateEmail(email);
            setIsFormCompleted(isValid);
        } else {
            setIsFormCompleted(false);
        }
   
    }, [name, state, city, email])

  function makeUpdateUser() {
    const updateDataUser = {
        
        "nome": name,
        "email": email,
        "cidade": city
        
    }

    updateCitizen(updateDataUser).then((response) => {
        updateUser(response);
        modalRef.current.closeModal();
    })
  }

  function makeUpdateLegislator() {
    const updateDataLegislator = {
        
        "nome": name,
        "email": email,
        "cidade": city
       
    }

    updateLegislator(updateDataLegislator).then((response) => {
        updateUser(response);
        modalRef.current.closeModal();
    })
}

  return (
    <Modal ref={modalRef} additionalClass="box">
      <h1>Atualização de perfil</h1>

      <Grid container className="form">
        <Grid item xs={6} className="group">
          <Box className="input">
            <h4>Nome</h4>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </Box>
          <Box className="input">
            <h4>Email</h4>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Box>
          <Box className="group_input">
            <Box className="input">
              <h4>Estado</h4>
              <input
                value={state}
                onChange={(event) => setState(event.target.value)}
              />
            </Box>
            <Box className="input">
              <h4>Cidade</h4>
              <input
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
            </Box>
          </Box>
        </Grid>
        <Grid className="profile" item xs={6}>
          <Box className="box_profile">
            <Avatar src="/profile.png" className="profile_avatar">
              M
            </Avatar>
            <h4>{currentUser.cpf}</h4>
            <h4>{currentUser.name}</h4>
            <h4>{currentUser.email}</h4>
            <h4>
              {currentUser.city} - {currentUser.state}
            </h4>
          </Box>
        </Grid>
        <Grid item xs={12}>
          { isCitizen ? 
            <Button
            className ={isFormCompleted ? "submitBlue" : "submitGray"} 
            onClick={() => makeUpdateUser()}                     
            >
              Editar
            </Button>
             : 
            <Button
                className ={isFormCompleted ? "submitBlue" : "submitGray"} 
                onClick={() => makeUpdateLegislator()}                     
                >
                Editar
            </Button>
          }
          
        </Grid>
      </Grid>
    </Modal>
  );
});

export default ModalUpdateProfile;
