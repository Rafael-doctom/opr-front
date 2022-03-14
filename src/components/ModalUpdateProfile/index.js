import React, { forwardRef } from "react";
import { Button, Box, Grid } from "@material-ui/core/";
import { Avatar } from "@material-ui/core";
import Modal from "../Modal";
import {mockUser} from "../../service/api"
import "./styles.css";

const ModalUpdateProfile = forwardRef((props, modalRef) => {
  const data = mockUser 
  return (
    <Modal ref={modalRef} additionalClass="box">
      <h1>Atualização de perfil</h1>

      <Grid container className="form">
        <Grid item xs={6} className="group">
          <Box className="input">
            <h4>Nome</h4>
            <input />
          </Box>
          <Box className="input">
            <h4>Email</h4>
            <input />
          </Box>
          <Box className="group_input">
            <Box className="input">
              <h4>Estado</h4>
              <input />
            </Box>
            <Box className="input">
              <h4>Cidade</h4>
              <input />
            </Box>
          </Box>
        </Grid>
        <Grid className="profile" item xs={6}>
          <Box className="box_profile">
            <Avatar src="/profile.png" className="profile_avatar">
              M
            </Avatar>
            <h4>{data.cpf}</h4>
            <h4>{data.name}</h4>
            <h4>{data.email}</h4>
            <h4>{data.city} - {data.state}</h4>
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
