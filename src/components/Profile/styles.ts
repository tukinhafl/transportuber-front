import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: var(--white);
  margin: 10px;

  .photo {
    position: relative;
    img {
      border-radius: 100%;
      width: 30vw;
      max-width: 130px;
    }

    span {
      position: absolute;
      bottom: -10px;
      right: 15px;
      font-size: 25px;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    width: 100%;
    margin-left: 10px;

    @media (min-width: 420px) {
      margin-left: 3vw;
    }

    h3 {
      margin-bottom: 15px;
    }

    p {
      font-size: 14px;
      padding: 2px 0;
    }

    svg {
      font-size: 14px;
      padding-bottom: 2px;
      vertical-align: middle;
    }

    @media (min-width: 460px) {
      .line {
        display: flex;
        flex-direction: row;

        p {
          padding: 5px 0;
        }

        .first {
          width: 60%;
        }
      }
    }
  }
  @media (min-width: 550px) {
    margin: auto;
    width: 550px;
  }
`;
