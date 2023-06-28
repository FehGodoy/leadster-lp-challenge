import React, { useEffect, useState } from "react";
import * as Styled from "./styles";
import dataFilter from "../../../data/videosData.json";
import useVideosHook from "@/hooks/useVideos";
import { Video } from "@/types/globalTypes";

const NavVideos = () => {
  const { categoriaVideos } = dataFilter;
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const {
    setCatVideoClicked,
    catVideoClicked,
    setFilteredVideos,
    filteredVideos,
    setOrderBy,
    filterVideos,
    orderBy,
    convertDate,
  } = useVideosHook();

  useEffect(() => {
    filterVideos(catVideoClicked, orderBy);
  }, [catVideoClicked, orderBy]);

  const handleCatClick = (categoria: string, index: number) => {
    setCatVideoClicked(categoria);
    setActiveIndex(index);
  };

  const handleOrderByChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    const selectedOrderBy = event.target.value as string;
    setOrderBy(selectedOrderBy);

    if (selectedOrderBy === "Data de Publicação") {
      setFilteredVideos((prevFilteredVideos: any) =>
        [...prevFilteredVideos].sort(
          (a: Video, b: Video) =>
            new Date(convertDate(b.dataPublicacao)).getTime() -
            new Date(convertDate(a.dataPublicacao)).getTime()
        )
      );
    } else if (selectedOrderBy === "Relevância") {
      setFilteredVideos((prevFilteredVideos: any) =>
        [...prevFilteredVideos].sort(
          (a: Video, b: Video) => a.relevancia - b.relevancia
        )
      );
    } else {
      filterVideos(catVideoClicked, selectedOrderBy);
    }
  };

  return (
    <Styled.Filter>
      <div className="container" data-testid="nav-videos">
        <div className="boxFilter">
          <div className="filterCat">
            <ul>
              {categoriaVideos.map((categoria: string, index: number) => (
                <li
                  key={index}
                  className={activeIndex === index ? "ativo" : ""}
                  onClick={() => handleCatClick(categoria, index)}
                >
                  {categoria}
                </li>
              ))}
            </ul>
          </div>
          <div className="orderBy">
            <div className="titulo">
              <span>Ordernar por</span>
            </div>
            <select name="ordenar" onChange={handleOrderByChange}>
              <option value="Selecione uma opção">Selecione uma opção</option>
              <option value="Data de Publicação">Data de Publicação</option>
              <option value="Relevância">Relevância</option>
            </select>
          </div>
        </div>
      </div>
    </Styled.Filter>
  );
};

export default NavVideos;
