import styled from "styled-components";

export const Banner = styled.section`
  background: #f0f8ff;
  padding: 150px 0px;

  @media (max-width: 991px) {
    padding: 100px 0px;
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

      .col-100-gy {
        text-align: center;
        width: 100%;

        .tag {
          max-width: 210px;
          margin: 10px auto;

          p {
            line-height: 35px;
            color: #2c83fb;
            font-size: 15px;
            text-transform: uppercase;
            font-weight: 700;
            border: 2px solid #2c83fb;
            border-radius: 25px;
            border-bottom-left-radius: 0;
          }
        }
        .titulo {
          h2 {
            font-weight: 500;
            font-size: 45px;
            color: #1c3c50;
          }
          h1 {
            font-size: 80px;
            color: #1f76f0;
            line-height: 2rem;
          }
        }
        .subtitulo {
          padding-top: 50px;

          h2 {
            font-size: 16px;
            color: #1c3c50;
            padding: 15px 0px;
            position: relative;
            font-weight: 500;
            &::before {
              content: "";
              display: block;
              width: 55%;
              height: 1px;
              background: #eee;
              margin: 0 auto;
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
            }
            span {
              font-weight: 700;
            }
          }
        }
      }
    }
    @media (max-width: 991px) {
      .col-100-gy{
        padding: 0px 10px ;
        .titulo {
        h1 {
          font-size: 55px!important;
          line-height: 3rem!important;
          margin-top: -15px;
        }
      }
      .subtitulo {
        h2 {
          &::before {
            width: 93%;
          }
        }
      }
      }

    }
  }
`;
