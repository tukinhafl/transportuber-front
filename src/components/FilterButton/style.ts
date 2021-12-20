import styled from "styled-components";

export const StyledButton = styled.button<{height: string, width: string, font: string}>`
  background: var(--white);
  height: ${props => props.height && props.height};
  width: ${props => props.width && props.width};
  font-size: ${props => props.font && props.font};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  margin: 15px 0;
`