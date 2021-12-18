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
      <CardRegister 
        title='Usuario'
        description='Você tem a opção de contratar motoristas para fazer a sua mudança.'
      />
      <CardRegister 
        title='Motorista'
        description='Você tem a opção de fechar negócios com usuários para transportar a carga deles.'
      />
    </StyledBackgroundPage>
  )
}