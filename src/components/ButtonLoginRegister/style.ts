import styled from "styled-components";

export const StyledContainerButton = styled.div`
  height: 50px;
  width: 100%;
  position: relative;
  margin: 40px 0;
`

export const StyledButton = styled.button`
  position: absolute;
  background: var(--gray);
  color: var(--white);
  border: none;
  border-radius: 10px;
  height: 50px;
  width: 145px;
  font-weight: bold;
  font-size: 18px;

  :nth-child(2) {
    right: 0;
  }

  :hover {
    width: 160px;
    background: var(--white);
    color: #000000;
    z-index: 1;
    transition: width 200ms ease-in;
  }

`