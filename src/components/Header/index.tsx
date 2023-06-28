import React from "react";
import * as Styled from "./styles";
import Image from "next/image";
import logoLeadster from "../../assets/logo.png";
const Header = () => {
  return (
    <Styled.Header>
      <div className="container" data-testid="header">
        <div className="row">
          <div className="col-100-gy">
            <div className="imagemLogo">
              <Image src={logoLeadster} alt="Leadster" />
            </div>
          </div>
        </div>
      </div>
    </Styled.Header>
  );
};

export default Header;
