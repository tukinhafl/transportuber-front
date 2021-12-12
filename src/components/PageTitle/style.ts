import styled from 'styled-components'

export const StyledTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h1, h2 {
    color: var(--white);
  }

  h1 {
    font-weight: bold;
    font-size: 30px;
    margin: 20px 0 10px 0;
  }

  h2 {
    font-size: 22px;
    font-weight: lighter;
    margin-bottom: 10px; 
  }
`

