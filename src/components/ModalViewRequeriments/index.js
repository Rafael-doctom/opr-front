/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, forwardRef } from "react";

import {
  AccountCircleRounded as AccountCircleRoundedIcon,
  ThumbUpAltRounded as ThumbUpAltRoundedIcon,
  ThumbUpAltOutlined as ThumbUpAltOutlinedIcon,
  SettingsOutlined as SettingsOutlinedIcon
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
  const [like, setLike] = useState(false);
  const [countLike, setCountLike] = useState(countLikes);

  const handleLike = () => {
    setLike(!like);

    if (!like) setCountLike(countLike + 1); // POST -> /like
    else setCountLike(countLike - 1); // POST -> /deslike
  };

  return (
    <Modal ref={modalRef} additionalClass="box">
      <div className="header-title">
        <h3>Visualização de Requerimento</h3>
        <button>
          <SettingsOutlinedIcon color="action" />
        </button>
      </div>

      <div className="header-profile">
        <div className="profile">
          {photoUser ? (
            <img src={photoUser} width={30} height={30} alt="Image" />
          ) : (
            <AccountCircleRoundedIcon color="action" />
          )}
          <div className="info">
            <h5>{nameUser}</h5>
            <small>{cityUser}</small>
          </div>
        </div>
        <h5>
          <strong>Data do ocorrido: </strong>
          {dateOccurrence}
        </h5>
      </div>

      <div className="status">
        <h4>Requerimento do Usuário {nameUser}</h4>
        <span>{requerimentStatus}</span>
      </div>

      <small>
        <strong>Criado em: </strong>
        {createdIn}
      </small>

      <ul className="tags-view">
        {tags.map((item, id) => (
          <li key={id}>{item} +</li>
        ))}
      </ul>

      <p className="description">{requerimentMessage}</p>

      <div className="box-like">
        <button onClick={() => handleLike()}>
          {like ? (
            <ThumbUpAltRoundedIcon />
          ) : (
            <ThumbUpAltOutlinedIcon color="action" />
          )}
        </button>
        <span>{countLike} apoios</span>
      </div>

      <div className="box-info">
        <div className="left">
          <div className="midias">
            <h4>Lista mídias</h4>
            <div className="carrossel">
              {media.map((item, id) => (
                <button key={id}>
                  <img
                    src={item}
                    width={120}
                    height={120}
                    alt={`Image ${id}`}
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="legisladores">
            <h4>Legisladores associados</h4>
            <div id="carrossel">
              <div className="carrossel">
                {legislators.map((item, id) => (
                  <div key={id} className="card-legislador">
                    <h4>{item.name}</h4>
                    <span>{item.party}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <h4>Comentários</h4>
          <div className="boxComments">
            {comments.map((item, id) => (
              <div key={id} className="comments">
                <div className="profile">
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
                </div>
                <p>{item.message}</p>
              </div>
            ))}
          </div>
          <div className="box-write">
            <input placeholder="Digite sua mensagem..." type="text" />
            <button>Comentar</button>
          </div>
        </div>
      </div>
    </Modal>
  );
});

export default ModalViewRequeriments;
