import { useNavigate } from "react-router"
import Input from "../Input"
import { StyledFormContainer } from "./style"
import * as yup from 'yup'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import api from "../../services/api"
import { IFormLoginProps } from "../../types"
import toast from 'react-hot-toast'
import { useUserData } from '../../providers/UserData'

export const FormLogin = () => {
  const navigate = useNavigate()
  const { setUserId } = useUserData()

  const formSchema = yup.object().shape({
    "email": yup
      .string()
      .required("E-mail obrigatório"),
    "password": yup
      .string()
      .required("Senha obrigatória")
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(formSchema)
    })

    const formSubmit = async ({ email, password }: IFormLoginProps) => {
      const user = { email, password }

      try {
        const resp = await api.post('autenticacao/usuario/acesso', user)
        const { access_token } = resp.data
        localStorage.setItem("token", JSON.stringify(access_token))
        setUserId(access_token)
        navigate('/user')
      }
      catch {
        toast.error("Usuário ou senha inválidos.") 
      }
    }

    const redirectToRegister = () => {
      navigate('/register')
    }

  return (
    <StyledFormContainer onSubmit={handleSubmit(formSubmit)}>
      <Input 
        icon='fas fa-envelope'
        register={register}
        name='email'
        error={errors.email?.message}
        placeholder='Digite seu email'
        type='email'
      />
      <Input 
        icon='fas fa-key'
        register={register}
        name='password'
        error={errors.password?.message}
        placeholder='Digite sua senha'
        type='password'
      />
      <div className='continue'>
        <p>Ainda não possui uma conta? <b onClick={redirectToRegister}>Clique aqui</b> </p>
        <button type='submit'>Continuar</button>
      </div>
    </StyledFormContainer>
  )
}