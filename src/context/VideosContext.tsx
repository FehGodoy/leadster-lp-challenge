"use client";

import React, { createContext, useState } from "react";
import dataFilter from "../../data/videosData.json";
const VideosContext = createContext<any>({});
import { Video,VideoCat } from "@/types/globalTypes";


export function VideosProvider({ children }: { children: React.ReactNode }) {
  const [catVideoClicked, setCatVideoClicked] = useState<Array<VideoCat>>([]);
  const [openVideo, setOpenVideo] = useState(false)
  const [videoClicked, setVideoClicked] = useState<Array<Video>>([]);
  const [filteredVideos, setFilteredVideos] = useState<Array<Video>>([]);
  const [orderBy, setOrderBy] = useState<string>("");
  const { videos } = dataFilter

    // Função auxiliar para converter a data no formato dd/mm/yyyy para yyyy/mm/dd
    const convertDate = (dateString: string) => {
      const [day, month, year] = dateString.split('/');
      return `${year}/${month}/${day}`;
    };

  const filterVideos = (catVideoClicked: string, orderBy: string) => {
    let filtered = videos;
  
    if (catVideoClicked.length > 0) {
      filtered = filtered.filter((video: Video) =>
        video.categorias.includes(catVideoClicked)
      );
    }
  
    if (orderBy === 'Data de Publicação') {
      filtered = filtered.sort(
        (a: Video, b: Video) =>
          new Date(convertDate(b.dataPublicacao)).getTime() -
          new Date(convertDate(a.dataPublicacao)).getTime()
      );
    } else if (orderBy === 'Relevância') {
      filtered = filtered.sort((a: Video, b: Video) => a.relevancia - b.relevancia);
    }
  
    setFilteredVideos(filtered);
  };
  


  return (
    <VideosContext.Provider
      value={{
        catVideoClicked,
        setCatVideoClicked,
        openVideo,
        setOpenVideo,
        videoClicked,
        setVideoClicked,
        filteredVideos,
        orderBy,
        setOrderBy,
        setFilteredVideos,
        filterVideos,
        convertDate
      }}
    >
      {children}
    </VideosContext.Provider>
  );
}

export default VideosContext;
