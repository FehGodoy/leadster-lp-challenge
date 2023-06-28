import React from "react";
import * as Styled from "./styles";

const Banner = () => {
  return (
    <Styled.Banner>
      <div className="container" data-testid="banner">
        <div className="row">
          <div className="col-100-gy">
            <div className="tag">
              <p>Webinars exclusivos</p>
            </div>
            <div className="titulo">
              <h2>Menos Conversinha,</h2> <br />
              <h1>Mais Conversão</h1>
            </div>
            <div className="subtitulo">
              <h2>
                Conheça as estratégias que
                <span> mudaram o jogo</span> e como aplicá-las no seu negócio.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Styled.Banner>
  );
};

export default Banner;
