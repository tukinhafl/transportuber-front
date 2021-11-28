import styled from 'styled-components'

export const StyledBackgroundCard = styled.div`
  background: var(--gray);
  position: relative;
  border-radius: 10px;
  margin: 30px 10px;
  padding: 10px 15px;

  h1 {
    font-family: var(--font-default);
    color: var(--white);
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    height: 24px;
    width: 76px;
  }

  p {
    font-family: var(--font-default);
    width: 200px;
    height: 54px;
    color: rgba(255, 255, 255, 0.8);
    font-size: 12px;
    line-height: 18px;
    margin: 10px 0;
  }

  span {
    position: absolute;
    background: var(--green);
    border-radius: 100%;
    height: 45px;
    width: 45px;
    right: 15px;
    bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: bold;
    color: var(--black);
    font-size: 30px;
    overflow: hidden;

    ::after {
      background: #fff;
      content: "";
      height: 155px;
      left: -75px;
      opacity: .2;
      position: absolute;
      top: -50px;
      transform: rotate(35deg);
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      width: 50px;
    }

    :hover {
      cursor: pointer;

      ::after {
        left: 120%;
        transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1); 
      }
    }
  }
`