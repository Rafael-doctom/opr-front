import React, { useRef, useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import DoneOutlineOutlinedIcon from "@material-ui/icons/DoneOutlineOutlined";
import { DropzoneDialog } from "material-ui-dropzone";
import Modal from "../Modal";

import "./styles.css";

export default function ModalNewRequeriments() {
  const [tag, setTag] = useState("");
  const [listTags, setListTags] = useState("");
  const [legislador, setLegislador] = useState("");
  const [partido, setPartido] = useState("");
  const [description, setDescription] = useState("");
  const [listLegislador, setListLegislador] = useState([]);
  const [files, setFiles] = useState([]);
  const [open, setOpen] = useState(false);

  const modalRef = useRef();
  const modalRefTags = useRef();
  const modalRefLegislador = useRef();

  const maxLengthTextArea = 500;
  const checkFile = files.length !== 0;

  const handleSalveTag = () => {
    modalRefTags.current.closeModal();
    setListTags([...listTags, tag]);
    setTag("");
  };

  const handleSalveLegislador = () => {
    modalRefLegislador.current.closeModal();
    const data = { legislador, partido };
    setListLegislador([...listLegislador, data]);
    setLegislador("");
    setPartido("");
  };

  const deleteTag = (id) => {
    setListTags(listTags.filter((item) => listTags.indexOf(item) !== id));
  };

  const deleteLegislador = (id) => {
    setListLegislador(
      listLegislador.filter((item) => listLegislador.indexOf(item) !== id)
    );
  };

  return (
    <Modal ref={modalRef} additionalClass="box">
      <h1>Criação de Requerimento</h1>

      <Grid container className="form">
        <Grid item xs={6} className="group">
          <Box className="input">
            <h4>
              Título <p>*</p>
            </h4>
            <input />
          </Box>
          <Box className="group-input">
            <Box className="input">
              <h4>
                Localização <p>*</p>
              </h4>
              <input />
            </Box>
            <Box className="input">
              <h4>
                Data <p>*</p>
              </h4>
              <input type="date" />
            </Box>
          </Box>
        </Grid>
        <Grid className="upload" item xs={6}>
          <Box className="upload-image">
            <h4>Imagem</h4>
            <Button
              variant="contained"
              onClick={() => setOpen(true)}
              disabled={checkFile}
              className={checkFile && "button-disabled"}
            >
              {checkFile ? (
                <DoneOutlineOutlinedIcon className="icon-photo" />
                ) : (
                <CameraAltOutlinedIcon />
              )}
            </Button>
          </Box>

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
              setFiles(files);
              setOpen(false);
            }}
            showPreviews={true}
            showFileNamesInPreview={true}
            dialogTitle={"Insira 3 fotos no máximo"}
            fileObjects={files}
          />
        </Grid>
        <Grid item xs={12}>
          <Box className="input">
            <h4>
              Descrição <p>*</p>
            </h4>
            <textarea
              value={description}
              rows="5"
              maxLength={maxLengthTextArea}
              onChange={(e) => setDescription(e.target.value)}
            />
            <small>
              {description.length}/{maxLengthTextArea}
            </small>
          </Box>

          <Box className="cards-tags">
            {listTags &&
              listTags.map((item, id) => {
                return (
                  <Box key={id} className="card-tag">
                    <Paper className="item">
                      <span>{item}</span>
                    </Paper>
                    <Button
                      className="delete-tag"
                      onClick={() => deleteTag(id)}
                    >
                      <CloseIcon fontSize="small" />
                    </Button>
                  </Box>
                );
              })}
            <Button
              className="new-element"
              variant="contained"
              onClick={() => modalRefTags.current.openModal()}
            >
              tags +
            </Button>
          </Box>

          <Modal ref={modalRefTags} additionalClass="tags">
            <form>
              <h4>Preencha as informações</h4>
              <input
                value={tag}
                onChange={(event) => setTag(event.target.value)}
                placeholder="Nome da nova TAG"
              />
              <Button
                onClick={() => handleSalveTag()}
                id="button"
                type="submit"
              >
                Salvar
              </Button>
            </form>
          </Modal>

          <h4>Legisladores associados</h4>

          <Box className="card-legislador">
            {listLegislador &&
              listLegislador.map((item, id) => {
                return (
                  <Box className="card-tag">
                    <Paper key={id} className="card">
                      <span>
                        <strong>{item.legislador}</strong>
                      </span>
                      <span>{item.partido || "Sem partido"}</span>
                    </Paper>
                    <Button
                      className="delete-tag"
                      onClick={() => deleteLegislador(id)}
                    >
                      <CloseIcon fontSize="small" />
                    </Button>
                  </Box>
                );
              })}
            <Button
              className="new-element"
              variant="contained"
              onClick={() => modalRefLegislador.current.openModal()}
            >
              <AddIcon fontSize="small" />
            </Button>
          </Box>

          <Modal ref={modalRefLegislador} additionalClass="legislador">
            <form>
              <h4>Preencha as informações</h4>
              <input
                value={legislador}
                onChange={(event) => setLegislador(event.target.value)}
                placeholder="Nome do Legislador"
              />
              <input
                value={partido}
                onChange={(event) => setPartido(event.target.value)}
                placeholder="Nome do Partido"
              />
              <Button
                onClick={() => handleSalveLegislador()}
                id="button"
                type="submit"
              >
                Salvar
              </Button>
            </form>
          </Modal>

          <Button
            onClick={() => modalRef.current.closeModal()}
            className="submit"
          >
            Criar
          </Button>
        </Grid>
      </Grid>
    </Modal>
  );
}