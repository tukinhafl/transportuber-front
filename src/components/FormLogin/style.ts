import styled from 'styled-components'

export const StyledFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: 80%;
  position: relative;
  max-height: 600px;
  overflow: auto;
  margin-top: 20px;

  .continue {
    margin-top: 20px;
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  p {
    color: var(--white);
    text-align: center;
    font-size: 13px;
    margin-bottom: 5px;
  }

  button {
    width: 100%;
    background: var(--white);
    height: 60px;
    padding: 15px;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 700;
    border: none;
  }
`