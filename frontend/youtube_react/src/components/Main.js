import React, { useContext } from "react";
import Modal from "react-modal";
import { ApiContext } from "../context/ApiContext";

import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";

import { BsImages } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { RiUploadCloud2Line } from "react-icons/ri";

import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
  },
  grid: {
    justifyContent: "center",
  },
}));

const Main = () => {
  const classes = useStyles();
  Modal.setAppElement("#root");
  const {
    title,
    setTitle,
    video,
    setVideo,
    thum,
    setThum,
    modalIsOpen,
    setModalIsOpen,
    newVideo,
  } = useContext(ApiContext);

  const customStyles = {
    content: {
      top: "30%",
      left: "43%",
      right: "auto",
      bottom: "auto",
    },
  };

  const handleEditMovie = () => {
    const fileInput = document.getElementById("mp4Input");
    fileInput.click();
  };

  const handleEditPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };

  return (
    <>
      <Grid container className={classes.grid}>
        <Grid item xs={11}>
          <Grid container spacing={5}>
            <Grid item xs={12}></Grid>

            <Grid item xs={1}>
              <Fab
                color="primary"
                aria-label="add"
                onClick={() => setModalIsOpen(true)}
              >
                <AddIcon />
              </Fab>
            </Grid>

            <Grid item xs={8}>
              <VideoDetail />
            </Grid>

            <Grid item xs={3}>
              <VideoList />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)} // Modal以外の余白をクリックしたとき
        style={customStyles}
      >
        <Typography>Movie title</Typography>
        <br />
        <TextField
          type="text"
          onChange={(event) => setTitle(event.target.value)}
        />
        <br />
        <br />
        <Container className={classes.container}>
          <input
            type="file"
            id="mp4Input"
            hidden="hidden"
            onChange={(event) => setVideo(event.target.files[0])}
          />

          <IconButton onClick={handleEditMovie}>
            <FaVideo className="photo" />
          </IconButton>

          <input
            type="file"
            id="imageInput"
            hidden="hidden"
            onChange={(event) => setThum(event.target.files[0])}
          />

          <IconButton onClick={handleEditPicture}>
            <BsImages className="photo" />
          </IconButton>
          <br />

          {title && video && thum && (
            <button className="btn-modal" onClick={() => newVideo()}>
              <RiUploadCloud2Line />
            </button>
          )}
          <button className="btn-modal" onClick={() => setModalIsOpen(false)}>
            <IoMdClose />
          </button>
        </Container>
      </Modal>
    </>
  );
};

export default Main;
