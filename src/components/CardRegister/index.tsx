import { useNavigate } from "react-router"
import { ICardRegisterProps } from "../../types"
import { StyledBackgroundCard } from "./style"

export const CardRegister = ( {title, description}: ICardRegisterProps ) => {
  const navigate = useNavigate()
  
  const goToRegisters = () => {
    if (title === 'Usuario') {
      navigate('/register/user')
    } else {
      navigate('/register/driver')
    }
  }

  return (
    <>
      <StyledBackgroundCard>
        <h1>{title}</h1>
        <p>{description}</p>
        <span onClick={goToRegisters}>
          &gt;
        </span>
      </StyledBackgroundCard>
  </>
  )
}