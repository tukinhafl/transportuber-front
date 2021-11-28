import styled from 'styled-components'

export const StyledBackgroundPage = styled.div`
  background-color: var(--background);
  height: 100vh;
  padding: 15px;
`

export const StyledReturn = styled.p`
  color: var(--orange);
  font-size: 12px;
  line-height: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;

  span {
    font-size: 17px;
    margin-right: 8px;
  }
`

export const StyledTitle = styled.h1` 
  color: var(--white);
  font-weight: bold;
  font-size: 36px;
  line-height: 47px;
  margin: 40px 0;
`

export const StyledDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 24px;
  line-height: 32px;
  font-weight: bold;
  font-family: var(--font-default);
  padding-bottom: 40px;
`