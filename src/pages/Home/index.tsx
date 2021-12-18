// import { useAuthState } from "react-firebase9-hooks/auth"
// import { useNavigate } from "react-router"
import { ButtonLoginRegister } from "../../components/ButtonLoginRegister"
// import { auth } from "../../services/firebase"
import { StyledTitle, StyledDescription } from "./style"
import DefaultBackground from "../../components/DefaultBackground/DefaultBackground";
// import { Profile } from "../../components/Profile";

export const Home = () => {
  // const navigate = useNavigate()
  // const [user] = useAuthState(auth)

  // const signOut = () => {
  //   auth.signOut()
  //   navigate('/')
  // }

  // const goToChat = () => {
  //   if (user) {
  //     navigate('/chat')
  //   }
  // }

  // const userData = {
  //   nome: "Mein",
  //   sobrenome: "Chang",
  //   email: "mein@kenzie.com.br",
  //   celular: "(43) 96789-1234",
  //   local: "Londrina/PR",
  //   cpf: "123.456.789.12",
  // };

  return (
    <>
      <DefaultBackground>
        <StyledTitle>Seja bem vindo ao TransportUber</StyledTitle>
        <StyledDescription>
          O aplicativo que te ajuda a transportar suas coisas com mais facilidade
          e confiança.
        </StyledDescription>
        <ButtonLoginRegister />
        {/* <Profile person={userData} /> */}
      </DefaultBackground>
    </>
  )
}

