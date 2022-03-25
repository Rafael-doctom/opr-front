import React, { forwardRef, useEffect, useState } from "react";
import { Button, Box, Grid } from "@material-ui/core/";
import { Avatar } from "@material-ui/core";
import Modal from "../Modal";
import { useUser } from '../../contexts/userContext';
import "./styles.css";

const ModalUpdateProfile = forwardRef((props, modalRef) => {
  const { currentUser, setCurrentUser  } = useUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
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
            onClick={() => modalRef.current.closeModal()}
            className="submit"
          >
            Editar
          </Button>
        </Grid>
      </Grid>
    </Modal>
  );
});

export default ModalUpdateProfile;
