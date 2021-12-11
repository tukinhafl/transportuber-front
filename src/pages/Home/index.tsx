import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth"
import { useAuthState } from "react-firebase9-hooks/auth"
import { useNavigate } from "react-router"
import { ButtonLoginRegister } from "../../components/ButtonLoginRegister"
import { auth } from "../../services/firebase"
import { StyledTitle, StyledDescription } from "./style"
import { StyledBackgroundPage } from "./style"

export const Home = () => {
  const navigate = useNavigate()
  const [user] = useAuthState(auth)

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
  }

  const signOut = () => {
    auth.signOut()
    navigate('/')
  }

  const goToChat = () => {
    if (user) {
      navigate('/chat')
    }
  }

  return (
    <StyledBackgroundPage>
      <StyledTitle>
        Seja bem vindo ao TransportUber
      </StyledTitle>
      <StyledDescription>
        O aplicativo que te ajuda a transportar suas coisas com mais facilidade e confiança.
      </StyledDescription>
      <ButtonLoginRegister />
      {
      user ? <button onClick={signOut}>Sair</button>
      : 
      <button onClick={signInWithGoogle}>Logar com google</button>
      }
      <button onClick={goToChat}>Go to chat</button>
    </StyledBackgroundPage>
  )
}