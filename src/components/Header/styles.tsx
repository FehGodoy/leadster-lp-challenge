import styled from "styled-components";

export const Header = styled.header`
  padding: 40px 0px;
  .container {
    max-width: 1140px;
    margin: 0 auto;

    .row {
      display: flex;
      flex-wrap: wrap;
      margin-right: -15px;
      margin-left: -15px;
      justify-content: center;
      align-items: center;
      width:100% ;

      .col-100-gy {
        max-width: 100%;

        .imagemLogo {
          img {
            max-width: 100%;
            height: auto;
          }
        }
      }
    }
  }
`;
