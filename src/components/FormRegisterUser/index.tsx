import { useNavigate } from "react-router"
import Input from "../Input"
import { StyledFormContainer } from "./style"
import * as yup from 'yup'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import api from "../../services/api"
import { IFormRegisterProps } from "../../types"
import toast from 'react-hot-toast'

export const FormRegisterUser = () => {
  const navigate = useNavigate()

  const formSchema = yup.object().shape({
    "nome": yup
      .string()
      .required("Nome obrigatório"),
    "sobrenome": yup
      .string()
      .required("Sobrenome obrigatório"),
    "email": yup
      .string()
      .required("E-mail obrigatório")
      .email("E-mail inválido"),
    "password": yup
      .string()
      .required("Senha obrigatória")
      .min(6, "Deve conter pelo menos 6 caracteres"),
    "confirmPassword": yup
      .string()
      .required("Confirmação obrigatória")
      .oneOf([yup.ref("password"), null], "Senhas devem ser iguais"),
    "cpf": yup
      .string()
      .required("CPF obrigatório"),
    "celular": yup
      .string()
      .required("Celular obrigatório")
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(formSchema)
    })

    const formSubmit = async ({ nome, sobrenome, email, password, cpf, celular }: IFormRegisterProps) => {
      const user = { nome, sobrenome, email, password, cpf, celular }

      try {
        await api.post('autenticacao/usuario/registro', user)
        navigate('/login')
        toast.success("Conta criada com sucesso")
      }
      catch {
        toast.error("Algo deu errado.") 
      }
    }

    const redirectToLogin = () => {
      navigate('/login')
    }

  return (
    <StyledFormContainer onSubmit={handleSubmit(formSubmit)}>
      <Input 
        icon='fas fa-user-circle'
        register={register}
        name='nome'
        error={errors.nome?.message}
        placeholder='Digite seu nome'
        type='text'
      />
      <Input 
        icon='fas fa-user-circle'
        register={register}
        name='sobrenome'
        error={errors.sobrenome?.message}
        placeholder='Digite seu sobrenome'
        type='text'
      />
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
      <Input 
        icon='fas fa-key'
        register={register}
        name='confirmPassword'
        error={errors.confirmPassword?.message}
        placeholder='Confirme sua senha'
        type='password'
      />
      <Input 
        icon='fas fa-id-card'
        register={register}
        name='cpf'
        error={errors.cpf?.message}
        placeholder='xxx.xxx.xxx-xx'
        type='text'
      />
      <Input 
        icon='fas fa-phone-alt'
        register={register}
        name='celular'
        error={errors.cellphone?.message}
        placeholder='(xx)xxxxx-xxxx'
        type='text'
      />
      <div className='continue'>
        <p>Já possui uma conta? <b onClick={redirectToLogin}>Clique aqui</b> </p>
        <button type='submit'>Continuar</button>
      </div>
    </StyledFormContainer>
  )
}