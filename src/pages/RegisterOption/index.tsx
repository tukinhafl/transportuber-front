import { StyledBackgroundPage, StyledTitle, StyledDescription, StyledReturn } from "./style"
import { CardRegister } from "../../components/CardRegister"

export const RegisterOption = () => {
  return (
    <StyledBackgroundPage>
      <StyledReturn>
        <span>&lt;</span>
        Voltar ao inicio
      </StyledReturn>
      <StyledTitle>
        Seja bem vindo
      </StyledTitle>
      <StyledDescription>
        Escolha como você deseja se cadastrar.
      </StyledDescription>
      <CardRegister />
    </StyledBackgroundPage>
  )
}