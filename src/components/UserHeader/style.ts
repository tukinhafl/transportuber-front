import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--gray);
  width: 100%;
  height: 200px;
  border-radius: 0 0 20px 20px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 15px 30px;
  box-sizing: border-box;

  h1, p {
    color: var(--white);
  }

  .divFilter {
    display: flex;
    justify-content: space-between;
  }
`