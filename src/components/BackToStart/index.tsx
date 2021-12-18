import { useNavigate } from "react-router"
import { StyledBackToStartContainer } from "./style"

export const BackToStart = () => {
  const navigate = useNavigate()

  return (
    <StyledBackToStartContainer onClick={() => navigate('/')}>
      <i className="fas fa-angle-left"></i>
      <h1>Voltar ao início</h1>
    </StyledBackToStartContainer>
  )
}