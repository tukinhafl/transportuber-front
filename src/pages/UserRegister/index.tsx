import { BackToStart } from "../../components/BackToStart"
import DefaultBackground from "../../components/DefaultBackground/DefaultBackground"
import { FormRegisterUser } from "../../components/FormRegisterUser"
import { PageTitle } from "../../components/PageTitle"

export const UserRegister = () => {
  return (
    <DefaultBackground>
      <BackToStart />
      <PageTitle title='Vamos lá,' subtitle='Preencha o formulario para se cadastrar.'/>
      <FormRegisterUser />
    </DefaultBackground>
  )
}