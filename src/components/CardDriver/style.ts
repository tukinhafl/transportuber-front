import styled from "styled-components";

export const StyledCardDriver = styled.li`
  height: 100px;
  background: var(--gray);
  padding: 10px;
  display: flex;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;

  img {
    border-radius: 100%;
    height: 60px;
    width: 60px;
  }

  .driverContainer {
    padding: 0 10px;
    color: var(--white);
    height: 80px;
    width: 290px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
      font-size: 13px;
      font-weight: 700;
    }

    .spanContainer {
      display: flex;
      justify-content: space-between;

      span {
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 10px;
        padding: 5px 10px;
        font-weight: bold;

        i {
          padding-right: 5px;
        }
      }
    }
    
  }
`