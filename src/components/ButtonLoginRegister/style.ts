import styled from "styled-components";
import { IStyledButtonProps } from "../../types";

export const StyledContainerButton = styled.div`
  height: 50px;
  width: 100%;
  position: relative;
  margin: 40px 0;
  background: var(--gray);
  border-radius: 10px;
`

export const StyledButton = styled.button<IStyledButtonProps>`
  background: ${props => props.prop === 'register' ? 'var(--white)' : 'var(--gray)'};
  color: ${props => props.prop === 'register' ? 'var(--black)' : 'var(--white)'};
  position: ${props => props.prop === 'register' ? 'relative' : 'absolute'};
  z-index: ${props => props.prop === 'register' ? 1 : 0};
  padding-left: ${props => props.prop !== 'register' && '120px'};
  right: 0;
  border: none;
  border-radius: 10px;
  height: 50px;
  width: ${props => props.prop === 'register' ? '50%' : '100%'};
  font-weight: bold;
  font-size: 18px;

  @media (min-width: 375px) {
    padding-left: ${props => props.prop !== 'register' && '150px'};
  }

  @media (min-width: 425px) {
    padding-left: ${props => props.prop !== 'register' && '180px'};
  }
`