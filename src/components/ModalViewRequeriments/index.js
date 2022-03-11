/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useRef, forwardRef } from "react";
import { Button, Box, TextField } from "@material-ui/core/";
import {
  SettingsBackupRestoreOutlined as SettingsBackupRestoreOutlinedIcon,
  AccountCircleRounded as AccountCircleRoundedIcon,
  ThumbUpAltOutlined as ThumbUpAltOutlinedIcon,
  ThumbUpAltRounded as ThumbUpAltRoundedIcon,
  SettingsOutlined as SettingsOutlinedIcon,
  DeleteOutline as DeleteOutlineIcon,
} from "@material-ui/icons/";

import ResponseAPI from "./Response.json";
import Modal from "../Modal";

import "./styles.css";

const requerimentStatus = ResponseAPI.status;
const photoUser = ResponseAPI.profile.photo;
const nameUser = ResponseAPI.profile.name;
const cityUser = ResponseAPI.profile.city;
const dateOccurrence = ResponseAPI.profile.dateOccurrence;
const createdIn = ResponseAPI.profile.createdIn;
const requerimentMessage = ResponseAPI.message;
var countLikes = ResponseAPI.likes;
const tags = ResponseAPI.tags;
const media = ResponseAPI.media;
const legislators = ResponseAPI.legislators;
const comments = ResponseAPI.comments;

const ModalViewRequeriments = forwardRef((props, modalRef) => {
  const [settings, setSettings] = useState(true);
  const [like, setLike] = useState(false);
  const [countLike, setCountLike] = useState(countLikes);
  const [message, setMessage] = useState(requerimentMessage);
  const [occurrence, setOccurrence] = useState(dateOccurrence);
  const [listTags, setListTags] = useState(tags);
  const [listLegislador, setListLegislador] = useState(legislators);
  const [nameTag, setNameTag] = useState("");
  const [nameLegislador, setNameLegislador] = useState("");
  const [namePartido, setNamePartido] = useState("");

  const modalRefTags = useRef();
  const modalRefLegislador = useRef();

  const handleLike = () => {
    setLike(!like);

    if (!like) setCountLike(countLike + 1); // POST -> /like
    else setCountLike(countLike - 1); // POST -> /deslike
  };

  const handleSettings = () => {
    setSettings(!settings);
  };

  const editTags = () => {
    modalRefTags.current.openModal();
  };

  const deleteTag = (id) => {
    setListTags(listTags.filter((item) => listTags.indexOf(item) !== id));
  };

  const handleSalveTag = () => {
    setListTags([...listTags, nameTag]);
    setNameTag("");
    modalRefTags.current.closeModal();
  };

  const editLegislador = () => {
    modalRefLegislador.current.openModal();
  };

  const deleteLegislador = (id) => {
    setListLegislador(
      listLegislador.filter((item) => listLegislador.indexOf(item) !== id)
    );
  };

  const handleSalveLegislador = () => {
    const data = { name: nameLegislador, party: namePartido };
    setListLegislador([...listLegislador, data]);
    setNameLegislador("");
    setNamePartido("");
    modalRefLegislador.current.closeModal();
  };

  return (
    <Modal ref={modalRef} additionalClass="box">
      <Box className="header-title">
        <h3>Visualização de Requerimento</h3>
        {settings ? (
          <Button onClick={() => handleSettings()}>
            <SettingsOutlinedIcon color="action" />
          </Button>
        ) : (
          <Button onClick={() => handleSettings()}>
            <SettingsBackupRestoreOutlinedIcon color="action" />
          </Button>
        )}
      </Box>

      <Box className="header-profile">
        {settings ? (
          <Box className="profile">
            {photoUser ? (
              <img src={photoUser} width={30} height={30} alt="Image" />
            ) : (
              <AccountCircleRoundedIcon color="action" />
            )}
            <Box className="info">
              <h5>{nameUser}</h5>
              <small>{cityUser}</small>
            </Box>
          </Box>
        ) : null}
        <h5>
          <strong>Data do ocorrido: </strong>
          {settings ? (
            <p>{occurrence}</p>
          ) : (
            <input
              id="test"
              value={occurrence}
              onChange={(e) => setOccurrence(e.target.value)}
            />
          )}
        </h5>
      </Box>

      <Box className="status">
        <h4>Requerimento do Usuário {nameUser}</h4>
        {settings ? <span>{requerimentStatus}</span> : null}
      </Box>

      <small>
        <strong>Criado em: </strong>
        {createdIn}
      </small>

      <ul className={settings ? "tags-view" : "tags-view settingsDelete"}>
        {listTags.map((item, id) => (
          <li key={id}>
            {item}
            {settings ? " + " : (
              <Button onClick={() => deleteTag(id)} className="settings-delete">
                <DeleteOutlineIcon />
              </Button>
            )}
          </li>
        ))}
        {settings ? null : (
          <Button onClick={() => editTags()} className="settings-new">Adicionar mais</Button>
        )}
      </ul>

      {settings ? (
        <p className="description">{message}</p>
      ) : (
        <textarea
          className="inputText"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      )}

      {settings ? (
        <Box className="box-like">
          <Button onClick={() => handleLike()}>
            {like ? (
              <ThumbUpAltRoundedIcon />
            ) : (
              <ThumbUpAltOutlinedIcon color="action" />
            )}
          </Button>
          <span>{countLike} apoios</span>
        </Box>
      ) : null}

      <Box className="box-info">
        <Box className="left">
          <Box className="midias">
            <h4>Lista mídias</h4>
            <Box className="carrossel">
              {media.map((item, id) => (
                <Button key={id}>
                  <img
                    src={item}
                    width={120}
                    height={120}
                    alt={`Image ${id}`}
                  />
                </Button>
              ))}
            </Box>
          </Box>
          <Box className="legisladores">
            <Box className="card-legisladores">
              <h4>Legisladores associados</h4>
              {settings ? null : (
                <Button onClick={() => editLegislador()} className="settings-new">Adicionar mais</Button>
              )}
            </Box>
            <Box id="carrossel">
              <Box className="carrossel">
                {listLegislador.map((item, id) => (
                  <Box key={id} className="card-legislador">
                    <Box id="card">
                      <h4>{item.name}</h4>
                      <span>{item.party}</span>
                    </Box>
                    {settings ? null : (
                      <Button onClick={() => deleteLegislador(id)} className="settings-delete">
                        <DeleteOutlineIcon />
                      </Button>
                    )}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        {settings ? (
          <Box className="right">
            <h4>Comentários</h4>
            <Box className="boxComments">
              {comments.map((item, id) => (
                <Box key={id} className="comments">
                  <Box className="profile">
                    {item.profile ? (
                      <img
                        src={item.profile}
                        width={20}
                        height={20}
                        alt="Profile"
                      />
                    ) : (
                      <AccountCircleRoundedIcon color="action" />
                    )}
                    <small>{item.name}</small>
                  </Box>
                  <p>{item.message}</p>
                </Box>
              ))}
            </Box>
            <Box className="box-write">
              <input placeholder="Digite sua mensagem..." type="text" />
              <Button className="comment-submit">Comentar</Button>
            </Box>
          </Box>
        ) : null}
      </Box>

      <Modal ref={modalRefTags} additionalClass="tags">
        <form>
          <h4>Preencha as informações</h4>
          <TextField 
            id="standard-basic" 
            value={nameTag}
            onChange={(event) => setNameTag(event.target.value)}
            label="Nome da nova TAG" 
          />
          <Button onClick={() => handleSalveTag()} id="Button" type="submit">
            Salvar
          </Button>
        </form>
      </Modal>

      <Modal ref={modalRefLegislador} additionalClass="legislador">
        <form>
          <h4>Preencha as informações</h4>
          <TextField 
            id="standard-basic" 
            value={nameLegislador}
            onChange={(event) => setNameLegislador(event.target.value)}
            label="Nome do Legislador"
          />
          <TextField 
            id="standard-basic" 
            value={namePartido}
            onChange={(event) => setNamePartido(event.target.value)}
            label="Nome do Partido"
          />
          <Button
            onClick={() => handleSalveLegislador()}
            id="Button"
            type="submit"
          >
            Salvar
          </Button>
        </form>
      </Modal>
    </Modal>
  );
});

export default ModalViewRequeriments;
