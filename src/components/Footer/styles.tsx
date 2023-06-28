import styled from "styled-components";

export const Footer = styled.footer`
  padding: 40px 0px;
  @media (max-width: 991px) {
    padding: 10px 0px;
  }
  .boxCopy {
    border-top: 1px solid #e9ecf3;
    padding: 27px 0;
    margin-top: 60px;
    @media (max-width: 991px) {
      padding: 0px;
      margin-top: 0px;
    }
    .col-50-gy {
      width: 50%;
      @media (max-width: 991px) {
        width: 100%;
      }
      .tituloCopy {
        p {
          font-weight: 400;
          color: #7f88a6;
          line-height: 20px;
          font-size: 12px;
          a {
            color: #007dff;
          }
        }
      }
      .tituloEndereco {
        p {
          font-weight: 400;
          color: #7f88a6;
          line-height: 20px;
          font-size: 12px;
        }
      }
    }
  }

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
      margin: 0 auto;
      @media (max-width: 1250px) {
        padding: 20px;
      }

      .imagemLogo {
        p {
          color: #677294;
          font-weight: 400;
          margin-bottom: 40px;
          font-size: 15px;
        }
      }

      .col-25-gy {
        width: 25%;
        @media (max-width: 991px) {
          width: 100%;
        }
        .boxAll {
          .tituloFooter {
            p {
              color: #2c3e50;
              margin-bottom: 20px;
              font-weight: 600;
              font-size: 18px;
            }
          }

          ul {
            list-style: none;
            padding-left: 0;
            &.links {
              li {
                margin-bottom: 15px;

                a {
                  color: #677294;
                  position: relative;
                  transition: color 0.2s linear;
                  display: inline-block;
                }
              }
            }
            &.linksSocial {
              display: flex;
              align-items: center;
              list-style: none;
              padding-left: 0;
              gap: 10px;
              li {
                a {
                  width: 46px;
                  height: 46px;
                  border-radius: 50%;
                  font-size: 14px;
                  line-height: 45px;
                  color: #858da8;
                  display: inline-block;
                  background: #ebeef5;
                  text-align: center;
                  transition: all 0.2s linear;
                  svg {
                    vertical-align: middle;
                  }
                }
              }
            }
          }
          .phoneAndEmail {
            margin: 20px 0px;
            p {
              margin-bottom: 1rem;
              color: #000;
              font-weight: 400;
              span {
                font-size: 15px;
                color: #677294;
              }
            }
          }
        }
      }
    }
  }
`;
