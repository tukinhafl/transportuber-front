import { BackToStart } from "../../components/BackToStart"
import DefaultBackground from "../../components/DefaultBackground/DefaultBackground"
import { FormRegisterDriver } from "../../components/FormRegisterDriver"
import { PageTitle } from "../../components/PageTitle"

export const DriverRegister = () => {
  return (
    <DefaultBackground>
      <BackToStart />
      <PageTitle title='Vamos la,' subtitle='Preencha o formulario para se cadastrar.'/>
      <FormRegisterDriver />
    </DefaultBackground>
  )
}