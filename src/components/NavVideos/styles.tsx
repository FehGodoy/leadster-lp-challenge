import styled from "styled-components";

export const Filter = styled.nav`
  margin: 40px 0px;

  @media (max-width: 991px) {
    margin: 0px 0px 40px 0px;
  }

  .container {
    max-width: 950px;
    margin: 0 auto;

    .boxFilter {
      display: flex;
      justify-content: space-between;
      border-bottom: 2px solid #eee;
      align-items: center;
      padding: 10px 0px 30px 0px;

      @media (max-width: 991px) {
        display: block;
      }

      .filterCat {
        ul {
          list-style: none;
          display: flex;
          gap: 20px;
          @media (max-width: 991px) {
            overflow: auto;
            padding: 20px 0px;
            margin: 0px 15px;

            &::-webkit-scrollbar-track {
              -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
              background-color: #f5f5f5;
              height: 2px;
              border-radius: 10px;
            }

            &::-webkit-scrollbar {
              width: 6px;
              background-color: #f5f5f5;
              height: 6px;
              border-radius: 10px;
            }

            &::-webkit-scrollbar-thumb {
              background-color: #1f76f0;
              height: 2px;
              border-radius: 10px;
            }
          }

          li {
            cursor: pointer;
            padding: 10px 20px;
            border: 1px solid #1c3c50;
            border-radius: 35px;
            font-size: 13px;
            color: #1c3c50;
            transition: ease-in 0.4s;
            font-weight: 500;
            @media (max-width: 991px) {
              cursor: pointer;
              min-width: 175px;
              display: block;
              text-align: center;
            }

            &:hover {
              border: 1px solid #1f76f0;
              color: #1f76f0;
            }
            &.ativo {
              border: 1px solid #1f76f0;
              color: #fff;
              background-color: #1f76f0;
            }
          }
        }
      }

      .orderBy {
        display: flex;
        align-items: center;
        gap: 5px;
        @media (max-width: 991px) {
          justify-content: left;
          margin: 10px 15px 0px 15px;
        }
        .titulo {
          span {
            font-size: 13px;
            font-weight: 700;
          }
        }
        select {
          border-radius: 8px;
          padding: 6px 5px;
          font-weight: 500;
          border: 2px solid #1c3c50;
        }
      }
    }
  }
`;
