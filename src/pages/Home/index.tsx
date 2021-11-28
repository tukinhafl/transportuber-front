import { ButtonLoginRegister } from "../../components/ButtonLoginRegister"
import { StyledTitle, StyledDescription } from "./style"
import { StyledBackgroundPage } from "./style"

export const Home = () => {

  return (
    <StyledBackgroundPage>
      <StyledTitle>
        Seja bem vindo ao TransportUber
      </StyledTitle>
      <StyledDescription>
        O aplicativo que te ajuda a transportar suas coisas com mais facilidade e confiança.
      </StyledDescription>
      <ButtonLoginRegister />
    </StyledBackgroundPage>
  )
}