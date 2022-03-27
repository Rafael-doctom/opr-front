/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useRef, forwardRef } from "react";
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
import { DropzoneDialog } from "material-ui-dropzone";

import Modal from "../Modal";

import "./styles.css";
import "./response.css";
import { modifyRequirement } from "../../service/requirements.service";
import { useRequirements } from "../../contexts/requirementsContext";

const ModalRequirements = forwardRef((props, modalRef) => {
  const [open, setOpen] = useState(false);
  const [requirement, setRequirement] = useState(props.requirement);
  const [settings, setSettings] = useState(true);
  const [support, setSupport] = useState(false);
  const [comment, setComment] = useState("");
  const [viewImage, setViewImage] = useState("");

  const { updateRequirement } = useRequirements();

  const modalRefTags = useRef();
  const modalRefLegislator = useRef();
  const modalViewMedia = useRef();

  const makeUpdateRequirement = () => {
    modifyRequirement(requirement).then((response) => {
      updateRequirement(response);
      modalRef.current.closeModal();
    });
  };

  const handleSupport = () => {
    setSupport(!support);
    if (!support)
      setRequirement({ ...requirement, likes: requirement.likes + 1 });
    // POST -> /support
    else setRequirement({ ...requirement, likes: requirement.likes - 1 }); // POST -> /unsupport
  };

  const handleSettings = () => {
    makeUpdateRequirement();
    setSettings(!settings);
  };

  const handleSaveTag = (newTag) => {
    setRequirement({ ...requirement, tags: [...requirement.tags, newTag] });
    modalRefTags.current.closeModal();
  };

  const editTags = () => {
    modalRefTags.current.openModal();
  };

  const deleteTag = (id) => {
    setRequirement({
      ...requirement,
      tags: requirement.tags.filter(
        (item) => requirement.tags.indexOf(item) !== id
      ),
    });
  };

  const editLegislador = () => {
    modalRefLegislator.current.openModal();
  };

  const deleteLegislador = (id) => {
    setRequirement({
      ...requirement,
      legislators: requirement.legislators.filter(
        (item) => requirement.legislators.indexOf(item) !== id
      ),
    });
  };

  const deleteMedia = (id) => {
    setRequirement({
      ...requirement,
      media: requirement.media.filter(
        (item) => requirement.media.indexOf(item) !== id
      ),
    });
  };

  const handleSalveLegislator = (legislatorData) => {
    setRequirement({
      ...requirement,
      legislators: [...requirement.legislators, legislatorData],
    });
    modalRefLegislator.current.closeModal();
  };

  const handleComment = () => {
    const data = {
      name: requirement.name,
      message: comment,
    };

    if (comment) {
      setRequirement({
        ...requirement,
        comments: [...requirement.comments, data],
      });
      setComment("");
    }
  };

  const openModalViewPhoto = (image) => {
    modalViewMedia.current.openModal();
    setViewImage(image);
  };

  const editAllowed = () => {
    return true;
  };

  return (
    <Modal ref={modalRef} additionalClass="box-requirement">
      {settings ? (
        <Box className="header-title">
          <h3>Visualização de Requerimento</h3>
          {editAllowed() && (
            <Button onClick={() => handleSettings()}>
              <EditIcon color="action" />
              Editar
            </Button>
          )}
        </Box>
      ) : (
        <Box className="header-title">
          <h3>Modificação de Requerimento</h3>
          <Button onClick={() => handleSettings()}>
            <SaveIcon color="action" />
            Salvar
          </Button>
        </Box>
      )}

      <Box className="header-profile">
        {!settings || (
          <Box className="profile">
            <AccountCircleRoundedIcon color="action" />

            <Box className="info">
              <h5>{requirement.nome}</h5>
              <small>{requirement.cidade}</small>
            </Box>
          </Box>
        )}
        <h5>
          <strong>Data do ocorrido: </strong>
          {settings ? (
            <p>{requirement.data}</p>
          ) : (
            <input
              id="occurrence"
              value={requirement.data}
              onChange={(e) =>
                setRequirement({
                  ...requirement,
                  data: e.target.value
                })
              }
            />
          )}
        </h5>
      </Box>

      <Box className="status">
        <h4>Requerimento do Usuário {requirement.nome}</h4>
        {!settings || <span>{requirement.status}</span>}
      </Box>

      <ul className="tags-view">
        {requirement.tags && requirement.tags.map((item, id) => (
          <li key={id}>
            {item}
            {settings ? (
              " + "
            ) : (
              <Button onClick={() => deleteTag(id)} className="settings-delete">
                <CloseRoundedIcon />
              </Button>
            )}
          </li>
        ))}
        {settings || (
          <Button onClick={() => editTags()} className="settings-new">
            Adicionar Tag
          </Button>
        )}
      </ul>

      {settings ? (
        <p className="description">{requirement.description}</p>
      ) : (
        <textarea
          className="inputText"
          value={requirement.description}
          onChange={(e) =>
            setRequirement({ ...requirement, description: e.target.value })
          }
        />
      )}

      {!settings || (
        <Box className="box-support">
          <Button onClick={() => handleSupport()}>
            {support ? (
              <ThumbUpAltRoundedIcon />
            ) : (
              <ThumbUpAltOutlinedIcon color="action" />
            )}
          </Button>
          <span>{requirement.likes} apoios</span>
        </Box>
      )}

      <Box className="box-info">
        <Box className="left">
          <Box className="midias">
            <Box className="card-newItem">
              <h4>Lista de mídias</h4>
              { requirement.media && requirement.media.length !== 3 && !settings ? (
                <Button onClick={() => setOpen(true)} className="settings-new">
                  Adicionar Mídias
                </Button>
              ) : null}
            </Box>
            <Box className="carrossel">
              {requirement.media && requirement.media.map((item, id) => (
                <Box className="box-media" key={id}>
                  <Button onClick={() => openModalViewPhoto(item)} key={id}>
                    <img
                      src={item}
                      width={120}
                      height={120}
                      alt={`Image ${id}`}
                    />
                  </Button>
                  {!settings && (
                    <Button
                      onClick={() => deleteMedia(id)}
                      className="settings-delete"
                    >
                      <DeleteOutlineIcon />
                    </Button>
                  )}
                </Box>
              ))}
            </Box>
          </Box>
          <Box className="legisladores">
            <Box className="card-newItem">
              <h4>Legisladores associados</h4>
              {settings || (
                <Button
                  onClick={() => editLegislador()}
                  className="settings-new"
                >
                  Adicionar Legislador
                </Button>
              )}
            </Box>
            <Box id="carrossel">
              <Box className="carrossel">
                {requirement.legislators && requirement.legislators.map((item, id) => (
                  <Box key={id} className="card-legislador">
                    <Box id="card">
                      <h4>{item.name}</h4>
                      <span>{item.party}</span>
                    </Box>
                    {settings || (
                      <Button
                        onClick={() => deleteLegislador(id)}
                        className="settings-delete"
                      >
                        <DeleteOutlineIcon />
                      </Button>
                    )}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        {!settings || (
          <Box className="right">
            <h4>Comentários</h4>
            <Box className="boxComments">
              {requirement.comments && requirement.comments.map((item, id) => (
                <Box key={id} className="comments">
                  <Box className="profile">
                    {item.user ? (
                      <img
                        src={item.user}
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
              <span id="downScroll" />
            </Box>
            <Box className="box-write">
              <input
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Digite sua mensagem..."
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    handleComment();
                  }
                }}
                type="text"
                required
              />
              <Button
                href="#downScroll"
                onClick={() => handleComment()}
                className="comment-submit"
              >
                Comentar
              </Button>
            </Box>
          </Box>
        )}
      </Box>

      <ModalTags ref={modalRefTags} submitFunction={handleSaveTag} />

      <ModalLegislator
        ref={modalRefLegislator}
        submitFunction={handleSalveLegislator}
      />

      <ModalViewPhoto ref={modalViewMedia} image={viewImage} />

      <DropzoneDialog
        acceptedFiles={["image/*"]}
        cancelButtonText={"Cancelar"}
        submitButtonText={"Salvar"}
        dropzoneText={"Escolher imagens"}
        previewText={"Imagens:"}
        maxFileSize={5000000}
        open={open}
        onClose={() => setOpen(false)}
        onSave={(files) => {
          //setFiles(files);
          setOpen(false);
        }}
        showPreviews={true}
        showFileNamesInPreview={true}
        dialogTitle={`Insira ${
          3 - requirement.media ? requirement.media.length : ""
        } foto(s) no máximo, limite de 3 fotos.`}
        //fileObjects={files}
        filesLimit={3 - requirement.media ? requirement.media.length : ""}
      />
    </Modal>
  );
});

const ModalTags = forwardRef((props, modalRef) => {
  const [newTag, setNewTag] = useState();

  const handleSubmit = (newTag) => {
    props.submitFunction(newTag);
    setNewTag("");
  };

  const saveDate = (e) => {
    e.preventDefault();
    window.alert("Dados salvos com sucesso!");
  };

  const dropdownTags = [
    {
      value: "Educação",
    },
    {
      value: "Saúde",
    },
    {
      value: "Cultura",
    },
  ];

  return (
    <Modal ref={modalRef} additionalClass="tags">
      <form onSubmit={saveDate}>
        <h4>Preencha as informações</h4>
        <TextField
          id="outlined-select-currency-native"
          select
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          SelectProps={{
            native: true,
          }}
          helperText="Por favor selecione a TAG"
          variant="outlined"
          required
        >
          <option value="" selected disabled hidden>
            Escolha a TAG
          </option>
          {dropdownTags && dropdownTags.map((option, id) => (
            <option key={id} value={option.value}>
              {option.value}
            </option>
          ))}
        </TextField>

        <Button type="submit" onClick={() => handleSubmit(newTag)} id="Button">
          Salvar
        </Button>
      </form>
    </Modal>
  );
});

const ModalLegislator = forwardRef((props, modalRef) => {
  const [name, setName] = useState("");
  const [party, setParty] = useState("");

  const handleSubmit = (legislatorData) => {
    props.submitFunction(legislatorData);
    setName("");
    setParty("");
  };

  const listLegislator = [
    {
      name: "Abílio Santana (PL-BA)",
    },
    {
      name: "Abou Anni (UNIAO-SP)",
    },
    {
      name: "Acácio Favacho (PROS-AP)",
    },
    {
      name: "Adolfo Viana (PSDB-BA)",
    },
    {
      name: "Adriana Ventura (NOVO-SP)",
    },
    {
      name: "Adriano do Baldy (PP-GO)",
    },
    {
      name: "Aécio Neves (PSDB-MG)",
    },
    {
      name: "Aelton Freitas (PL-MG)",
    },
    {
      name: "Afonso Florence (PT-BA) ",
    },
    {
      name: "Afonso Hamm (PP-RS)",
    },
    {
      name: "Afonso Motta (PDT-RS)",
    },
  ];

  const listParties = [
    {
      name: "Movimento Democrático Brasileiro",
    },
    {
      name: "Partido dos Trabalhadores",
    },
    {
      name: "Partido da Social Democracia Brasileira",
    },
    {
      name: "Progressistas",
    },
    {
      name: "Partido Democrático Trabalhista",
    },
    {
      name: "União Brasil",
    },
    {
      name: "Partido Trabalhista Brasileiro",
    },
    {
      name: "Partido Liberal",
    },
    {
      name: "Partido Socialista Brasileiro",
    },
    {
      name: "Republicanos",
    },
    {
      name: "Cidadania",
    },
    {
      name: "Partido Social Cristão",
    },
    {
      name: "Partido Comunista do Brasil",
    },
    {
      name: "Podemos",
    },
    {
      name: "Partido Social Democrático",
    },
    {
      name: "Partido Verde",
    },
  ];

  return (
    <Modal ref={modalRef} additionalClass="legislador">
      <form>
        <h4>Preencha as informações</h4>
        <TextField
          id="outlined-select-currency-native"
          select
          value={name}
          onChange={(event) => setName(event.target.value)}
          SelectProps={{
            native: true,
          }}
          helperText="Por favor selecione o Legislador"
          variant="outlined"
          required
        >
          <option value="" selected disabled hidden>
            Escolha o Legislador
          </option>
          {listLegislator && listLegislator.map((option, id) => (
            <option key={id} value={option.name}>
              {option.name}
            </option>
          ))}
        </TextField>

        <TextField
          id="outlined-select-currency-native"
          select
          value={party}
          onChange={(event) => setParty(event.target.value)}
          SelectProps={{
            native: true,
          }}
          helperText="Por favor selecione o partido"
          variant="outlined"
          required
        >
          <option value="" selected disabled hidden>
            Escolha o partido
          </option>
          {listParties && listParties.map((option, id) => (
            <option key={id} value={option.name}>
              {option.name}
            </option>
          ))}
        </TextField>
        <Button
          onClick={() => handleSubmit({ name: name, party: party })}
          id="Button"
          type="submit"
        >
          Salvar
        </Button>
      </form>
    </Modal>
  );
});

const ModalViewPhoto = forwardRef((props, modalRef) => {
  return (
    <Modal ref={modalRef} additionalClass="viewPhoto">
      <img src={props.image} alt="Image" width="100%" height="100%" />
    </Modal>
  );
});

export default ModalRequirements;
