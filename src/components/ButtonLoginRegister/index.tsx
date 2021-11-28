import { useNavigate } from "react-router-dom"
import { StyledContainerButton, StyledButton } from "./style"

export const ButtonLoginRegister = () => {
  const navigate = useNavigate()

  const redirectToRegister = () => {
    navigate('/register')
  }

  return (
    <StyledContainerButton>
      <StyledButton onClick={redirectToRegister}>
        Cadastro
      </StyledButton>
      <StyledButton>
        Login
      </StyledButton>
    </StyledContainerButton>
  )
}