import React from "react";
import * as Styled from "./styles";
import Image from "next/image";
import logoLeadster from "../../assets/logo-footer.gif";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <Styled.Footer>
      <div className="container" data-testid="footer">
        <div className="row">
          <div className="col-100-gy">
            <div className="imagemLogo">
              <Image src={logoLeadster} alt="Leadster" />
              <p>Transformando visitantes em clientes.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-25-gy">
            <div className="boxAll">
              <div className="tituloFooter">
                <p>Links Principais</p>
              </div>
              <ul className="links">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Ferramenta</a>
                </li>
                <li>
                  <a href="#">Preços</a>
                </li>
                <li>
                  <a href="#">Contato</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-25-gy">
            <div className="boxAll">
              <div className="tituloFooter">
                <p>Cases</p>
              </div>
              <ul className="links">
                <li>
                  <a href="#">Geração de Leads B2B</a>
                </li>
                <li>
                  <a href="#">Geração de Leads em Software</a>
                </li>
                <li>
                  <a href="#">Geração de Leads em Imobiliária</a>
                </li>
                <li>
                  <a href="#">Cases de Sucesso</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-25-gy">
            <div className="boxAll">
              <div className="tituloFooter">
                <p>Materiais</p>
              </div>
              <ul className="links">
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Parceria com Agências</a>
                </li>
                <li>
                  <a href="#">Guia Definitivo do Marketing</a>
                </li>
                <li>
                  <a href="#">Materiais Gratuitos</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-25-gy">
            <div className="boxAll">
              <div className="tituloFooter">
                <p>Siga a Leadster</p>
              </div>
              <ul className="linksSocial">
                <li>
                  <a href="#">
                    <FaLinkedinIn width={18} height={18} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaFacebookF  width={18} height={18}/>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaInstagram  width={18} height={18}/>
                  </a>
                </li>
              </ul>
              <div className="phoneAndEmail">
                <p>
                  E-mail: <span>contato@leadster.com.br</span>
                </p>
                <p>
                  Telefone: <span>(42) 98828-9851</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="boxCopy">
        <div className="container">
          <div className="row">
            <div className="col-50-gy">
              <div className="tituloCopy">
                <p>Copyright © 2015 - 2022 Todos os direitos reservados | <a href="#">Leadster</a></p>
              </div>
            </div>
            <div className="col-50-gy">
              <div className="tituloEndereco">
                <p>Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | <a href="#">
                Termos de uso</a> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Styled.Footer>
  );
};

export default Footer;
