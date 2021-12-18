import { BackToStart } from "../../components/BackToStart"
import DefaultBackground from "../../components/DefaultBackground/DefaultBackground"
import { FormLogin } from "../../components/FormLogin"
import { PageTitle } from "../../components/PageTitle"

export const Login = () => {
  return (
    <DefaultBackground>
      <BackToStart />
      <PageTitle title='Vamos lá,' subtitle='Entre com seu email e sua senha.'/>
      <FormLogin />
    </DefaultBackground>
  )
}