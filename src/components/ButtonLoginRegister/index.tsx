// import { GoogleAuthProvider, signInWithPopup } from "@firebase/auth"
import { useNavigate } from "react-router-dom"
// import { auth } from "../../services/firebase"
import { StyledContainerButton, StyledButton } from "./style"

export const ButtonLoginRegister = () => {
  const navigate = useNavigate()

  const redirectToRegister = () => {
    navigate('/register')
  }

  // const signInWithGoogle = async () => {
  //   const provider = new GoogleAuthProvider()
  //   await signInWithPopup(auth, provider)
  //   await navigate('/login')
  // }

  return (
    <StyledContainerButton>
      <StyledButton onClick={redirectToRegister} prop='register'>
        Cadastro
      </StyledButton>
      <StyledButton onClick={() => navigate('/login')}>
        Login
      </StyledButton>
    </StyledContainerButton>
  )
}