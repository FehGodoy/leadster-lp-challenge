import React, { useState } from "react";
import * as Styled from "./styles";
import dataFilter from "../../../data/videosData.json";
import useVideosHook from "@/hooks/useVideos";
import Image from "next/image";
import ModalVideo from "../ModalVideo";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Video } from "@/types/globalTypes";

const VideosContent = () => {
  const { videos } = dataFilter;
  const { setOpenVideo, openVideo, setVideoClicked, filteredVideos } =
    useVideosHook();
  const videosPerPage = 9; // número de vídeos por página
  const [currentPage, setCurrentPage] = useState(1); // página atual

  // Cálculo dos índices de início e fim dos vídeos a serem exibidos na página atual
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos =
    filteredVideos.length === 0
      ? videos.slice(indexOfFirstVideo, indexOfLastVideo)
      : filteredVideos.slice(indexOfFirstVideo, indexOfLastVideo);

  const handleOpenModal = (videoContent: {}) => {
    setOpenVideo(true);
    setVideoClicked(videoContent);
  };

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Styled.Videos>
        <div className="container" data-testid="videos-content">
          <TransitionGroup className="boxAll">
            {currentVideos.map((video: Video) => (
              <CSSTransition key={video?.id} timeout={200} classNames="fade">
              <div
                className="boxVideo"
                onClick={() => handleOpenModal(video)}
              >
                <div className="thumbnail">
                  <Image
                    src={video?.thumbnail}
                    alt={video.titulo}
                    width={350}
                    height={160}
                  />
                </div>
                <div className="tituloVideo">
                  <h3>{video.titulo}</h3>
                </div>
              </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
          {/* paginação */}
          <div className="pagination">
            <span>Página</span>
            {Array.from({
              length: Math.ceil(
                filteredVideos.length === 0
                  ? videos.length / videosPerPage
                  : filteredVideos.length / videosPerPage
              ),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
        {openVideo && <ModalVideo />}
      </Styled.Videos>
    </>
  );
};

export default VideosContent;
