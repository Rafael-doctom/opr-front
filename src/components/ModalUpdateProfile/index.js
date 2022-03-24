import React, { forwardRef, useEffect, useState } from "react";
import { Button, Box, Grid } from "@material-ui/core/";
import { Avatar } from "@material-ui/core";
import Modal from "../Modal";
import { useUser } from '../../contexts/userContext';
import "./styles.css";
import { validateCPF, validateEmail } from '../../utils/validators';
import { updateCitizen } from "../../service/citizen.service";
import { useNavigate } from "react-router-dom";

const ModalUpdateProfile = forwardRef((props, modalRef) => {
  const { currentUser, setCurrentUser  } = useUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [isFormCompleted, setIsFormCompleted] = useState(false);

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

  function makeUpdate() {
    const updateData = {
        
        "nome": name,
        "email": email,
        "cidade": city
        
    }

    updateCitizen(updateData).then((response) => {
        setCurrentUser(response);
        navigate("/home");
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
          <Button
            className ={isFormCompleted ? "submitBlue" : "submitGray"} 
            onClick={() => makeUpdate()}                     
          >
            Editar
          </Button>
        </Grid>
      </Grid>
    </Modal>
  );
});

export default ModalUpdateProfile;
