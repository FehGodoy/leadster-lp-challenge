import styled from "styled-components";

export const Leads = styled.section`
  background: #f0f8ff;
  padding: 80px 0px;

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
      width: 100%;

      .col-50-gy {
        width: 50%;
        @media (max-width: 991px) {
          &:first-child {
            display: none;
          }
        }
        @media (max-width: 991px) {
          width:100% ;
        }
        &:last-child {
          padding: 60px;
          @media (max-width: 991px) {
            padding: 30px;
          }
        }

        .imagemLead {
          img {
            width: 100%;
            object-fit: contain;
            height: auto;
          }
        }

        .titulo {
          h3 {
            font-size: 35px;
            font-weight: 500;
            color: #1c3c50;
            @media (max-width: 991px) {
              text-align: center;
            }

            span {
              font-weight: 900;
            }
          }
        }
        .subtitulo {
          margin: 15px 0px;
          border-bottom: 2px solid #d5d5d5;
          padding: 0px 0px 20px 0px;
          @media (max-width: 991px) {
            text-align: center;
          }

          h6 {
            font-weight: 500;
            font-size: 20px;
            color: #1c3c50;
            span {
              font-weight: 900;
            }
          }
        }
        .boxBtnAndRank {
          display: flex;
          align-items: center;
          gap: 20px;

          @media (max-width: 991px) {
            display: block;
            text-align: center;
            margin: 30px 0px;
          }

          .botao {
            a {
              background-color: #1f76f0;
              color: #fff;
              padding: 20px 25px;
              border-radius: 60px;
              text-transform: uppercase;
              font-weight: 600;
              font-size: 15px;
            }
          }
          .imagemTop {
            @media (max-width: 991px) {
              margin: 30px 0px;
            }
            img {
              @media (max-width: 991px) {
                width: 145px;
              }
              width: 160px;
              height: auto;
            }
          }
        }
        .rodape {
          margin: 10px 0px;
          display: flex;
          align-items: center;
          

          @media (max-width: 991px) {
            display: block;
            text-align: center;
            margin: 0 auto;
            gap: 7px;
          }

          .iconeImage {
            display: flex;
            align-items: center;

            @media (max-width: 991px) {
              justify-content: center;
            }
          }
          span {
            font-size: 12px;
            color: #1c3c50;
            font-weight: 600;
          }
          .rating {
            display: flex;
            align-items: center;
            gap: 6px;

            @media (max-width: 991px) {
              justify-content: center;
              margin: 8px 0px;
            }

            img {
              width: 65px;
              height: auto;
            }
            span {
              font-size: 12px;
              color: #1c3c50;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
`;
