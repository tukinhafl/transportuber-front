import { useAuthState } from "react-firebase9-hooks/auth"
import { BackToStart } from "../../components/BackToStart"
import DefaultBackground from "../../components/DefaultBackground/DefaultBackground"
import { FormLogin } from "../../components/FormLogin"
import { PageTitle } from "../../components/PageTitle"
import { auth } from "../../services/firebase"


export const Login = () => {
  const [user] = useAuthState(auth)

  console.log(user)
  return (
    <DefaultBackground>
      <BackToStart />
      <PageTitle />
      <FormLogin />
    </DefaultBackground>
  )
}