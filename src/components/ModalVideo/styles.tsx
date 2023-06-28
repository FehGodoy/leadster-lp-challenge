import styled from "styled-components";

export const ModalVideo = styled.div`
  .tituloVideo {
    margin: 20px 0px;
    text-align: center;
    padding: 0px 70px;

    h3 {
      color: #1c3c50;
      font-weight: 600;
      b {
        color: #2c83fb;
      }
    }
  }
  .descricaoVideo {
    padding: 10px 25px 25px 25px;

    .titulo {
      margin: 10px 0px;
      border-bottom: 2px solid #eee;

      p {
        font-weight: 700;
        color: #1c3c50;
        margin: 7px 0px;
      }
    }
  }
  .downloadsVideo {
    padding: 0px 25px 25px 25px;

    .titulo {
      margin: 10px 0px;
      border-bottom: 2px solid #eee;

      p {
        font-weight: 700;
        color: #1c3c50;
        margin: 7px 0px;
      }
    }
    ul {
      display: flex;
      align-items: center;
      list-style: none;
      flex-wrap: wrap;
      padding: 0;
      gap: 6px;
      li {
        a {
          display: flex;
          align-items: center;
          gap: 4px;
          border-radius: 4px;
          p {
            font-size: 13px;
            padding: 4px 6px 4px 0px;
          }
          .icone {
            padding: 4px 6px;
            border-radius: 4px;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
            display: flex;
            align-items: center;
          }
        }
        &.spread {
          a {
            background-color: #c2f4ea;
            .icone {
              background-color: #9fefdf;

              svg {
                color: #2dae65;
              }
            }
            color: #2dae65;
          }
        }
        &.document {
          a {
            background-color: #c2e6ff;
            .icone {
              background-color: #a1d9ff;

              svg {
                color: #069df3;
              }
            }
            color: #069df3;
          }
        }
        &.presentation {
          a {
            background-color: #fff8d0;
            .icone {
              background-color: #fff1a0;

              svg {
                color: #b29b2e;
              }
            }
            color: #b29b2e;
          }
        }
        &.folder {
          a {
            background-color: #e8eef3;
            .icone {
              background-color: #d0dee7;

              svg {
                color: #89979f;
              }
            }
            color: #89979f;
          }
        }
      }
    }
  }
  .contentDesc {
    p {
      color: #1c3c50;
      font-weight: 500;
      font-size: 15px;
    }
  }
`;
