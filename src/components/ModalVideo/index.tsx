import React from "react";
import * as Styled from "./styles";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import useVideosHook from "@/hooks/useVideos";
import ReactPlayer from "react-player";
import { FaCloudArrowDown } from "react-icons/fa6";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 520,
  bgcolor: "background.paper",
  borderTop: "4px solid #2c83fb",
  boxShadow: 24,
  borderRadius: 5,
};

const ModalVideo = () => {
  const { openVideo, setOpenVideo, videoClicked } = useVideosHook();
  const handleClose = () => {
    setOpenVideo(false);
  };

  return (
    <Modal
      open={openVideo}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="modalVideoCustom"
    >
      <Box sx={style}>
        <Styled.ModalVideo>
          <div className="tituloVideo">
            <h3>
              <b>Webinar:</b> {videoClicked?.titulo}
            </h3>
          </div>
          <ReactPlayer url={`${videoClicked?.link}`} width="auto" />
          <div className="descricaoVideo">
            <div className="titulo">
              <p>Descrição</p>
            </div>
            <div className="contentDesc">
              <p>{videoClicked?.descricao}</p>
            </div>
          </div>
          <div className="downloadsVideo">
            <div className="titulo">
              <p>Downloads</p>
            </div>
            <ul>
              <li className="spread">
                <a href="#">
                  <div className="icone">
                    <FaCloudArrowDown width={14} height={14} />
                  </div>
                  <p>Spreadsheet.xls</p>
                </a>
              </li>
              <li className="document">
                <a href="#">
                  <div className="icone">
                    <FaCloudArrowDown width={14} height={14} />
                  </div>
                  <p>Document.doc</p>
                </a>
              </li>
              <li className="presentation">
                <a href="#">
                  <div className="icone">
                    <FaCloudArrowDown width={14} height={14} />
                  </div>
                  <p>Presentation.ppt</p>
                </a>
              </li>
              <li className="folder">
                <a href="#">
                  <div className="icone">
                    <FaCloudArrowDown width={14} height={14} />
                  </div>
                  <p>Folder.zip</p>
                </a>
              </li>
            </ul>
          </div>
        </Styled.ModalVideo>
      </Box>
    </Modal>
  );
};

export default ModalVideo;
