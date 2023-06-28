import styled from "styled-components";
import playerBackground from "../../assets/player.png";

export const Videos = styled.div`
  margin: 40px 0px;

  .container {
    max-width: 950px;
    margin: 0 auto;

    .boxAll {
      display: flex;
      flex-wrap: wrap;
      gap: 35px;
      padding: 0px 0px 45px 0px;
      border-bottom: 2px solid #eee;
      @media (max-width: 991px) {
        gap: 0px;
      }

      .boxVideo {
        width: 30%;
        border-radius: 15px;
        box-shadow: 0px 0px 5px 0px rgb(209 209 209 / 75%);
        cursor: pointer;
        @media (max-width: 991px) {
          width: 45%;
          margin: 10px;
        }

        .thumbnail {
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          transition: ease-in 0.4s;

          &::after,
          &::before {
            transition: ease-in 0.4s;
            content: "";
            display: block;
          }
          img {
            width: 100%;
            @media (max-width: 991px) {
              object-fit: cover;
            }
          }
        }
        .tituloVideo {
          padding: 20px;

          h3 {
            font-size: 15px;
            color: #1c3c50;
            transition: ease-in 0.3s;
          }
        }
        &:hover {
          .tituloVideo {
            h3 {
              color: #1f76f0;
            }
          }
          .thumbnail {
            transition: ease-in 0.4s;
            &::after {
              transition: ease-in 0.4s;
              content: "";
              display: block;
              background-image: url("data:image/svg+xml,%3Csvg fill='%23fff' viewBox='0 0 36 36' version='1.1' preserveAspectRatio='xMidYMid meet' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3Eplay-solid%3C/title%3E%3Cpath class='clr-i-solid clr-i-solid-path-1' d='M32.16,16.08,8.94,4.47A2.07,2.07,0,0,0,6,6.32V29.53a2.06,2.06,0,0,0,3,1.85L32.16,19.77a2.07,2.07,0,0,0,0-3.7Z'%3E%3C/path%3E%3Crect x='0' y='0' width='36' height='36' fill-opacity='0'/%3E%3C/svg%3E");
              width: 75px;
              height: 75px;
              left: 0;
              right: 0;
              position: absolute;
              background-repeat: no-repeat;
              margin: 0 auto;
              display: flex;
              align-items: center;
            }
            &::before {
              background-color: #2781ff7d;
              transition: ease-in 0.4s;
              content: "";
              display: block;
              width: 100%;
              height: 100%;
              position: absolute;
              border-radius: 4px;
              border-bottom-left-radius: 0px;
              border-bottom-right-radius: 0px;
            }
          }
        }
      }
    }
    .pagination {
      display: flex;
      justify-content: center;
      margin: 30px 0px 50px 0px;
      gap: 8px;
      align-items: center;
      span {
        font-weight: 700;
        color: #1c3c50;
      }
      button {
        background-color: transparent;
        padding: 8px 10px;
        cursor: pointer;
        border-radius: 5px;
        color: #1c3c50;
        border: 0;
        font-size: 15px;
        font-weight: 500;

        &.active {
          color: #1f76f0;
          border: 2px solid #1f76f0;
        }
      }
    }
  }
`;
