import styled from 'styled-components'
import { IIsMine } from '../../types'

export const StyledMessagesContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: flex-end;
`

export const StyledClose = styled.span`
  height: 35px;
  width: 35px;
  font-family: arial;
  font-weight: bold;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5px;
  right: 5px;
`

export const StyledMessage = styled.div<IIsMine>`
  width: auto;
  background: ${props => props.isMine ? 'lightblue' : 'lightgreen'};
  border-radius: 25px;
  padding: 10px;
  margin: 8px
`

export const StyledMessageBackground = styled.div<IIsMine>`
  width: 100%;
  display: flex;
  flex-direction: ${props => props.isMine && 'row-reverse'};
  align-items: center;
`

export const StyledAvatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin: 0 5px;
`

export const StyledMessagesForm = styled.form`
  width: 100%;
  height: 120px;
  display: flex;
`

export const StyledSendButton = styled.button`
  width: 20%;
  background: lightblue;
  border: none;
`

export const StyledInput = styled.input`
  width: 80%;
  background: lightgrey;
  border: none;
  font-size: 22px;
`