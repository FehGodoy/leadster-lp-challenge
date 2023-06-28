import React from "react";
import * as Styled from "./styles";
import Image from "next/image";
import leadImage from "../../assets/comparativo_img_CTA.png";
import selo_RD from "../../assets/selo_RD.png";
import noCardDark from "../../assets/no-card-dark.webp";
import rating from "../../assets/rating.webp";

const GeracaoSection = () => {
  return (
    <Styled.Leads>
      <div className="container" data-testid="geracao-section">
        <div className="row">
          <div className="col-50-gy">
            <div className="imagemLead">
              <Image src={leadImage} alt="Geração de Leads" />
            </div>
          </div>
          <div className="col-50-gy">
            <div className="titulo">
              <h3>
                Pronto para triplicar sua <span>Geração de Leads?</span>
              </h3>
            </div>
            <div className="subtitulo">
              <h6>
                Criação e ativação em <span>4 minutos.</span>
              </h6>
            </div>
            <div className="boxBtnAndRank">
              <div className="botao">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Ver Demonstração
                </a>
              </div>
              <div className="imagemTop">
                <Image src={selo_RD} alt="Selo RD Station" />
              </div>
            </div>
            <div className="rodape">
              <div className="iconeImage">
                <Image
                  src={noCardDark}
                  alt="Não é necessário Cartão de Crédito"
                />
              </div>
              <span>Não é necessário Cartão de Crédito | </span>
              <div className="rating">
                <Image src={rating} alt="4.9/5 média de satisfação" />
                <span>4.9/5 média de satisfação</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styled.Leads>
  );
};

export default GeracaoSection;
