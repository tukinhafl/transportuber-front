import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import DefaultBackground from "../../components/DefaultBackground/DefaultBackground"
import { DriverList } from "../../components/DriverList"
import { FilterButton } from "../../components/FilterButton"
import { UserHeader } from "../../components/UserHeader"
import { StyledDiv, StyledFilterType, StyledLoadButton } from "./style"

export const UserProfile = () => {
  const token = JSON.parse(localStorage.getItem('token') || "null")
  const navigate = useNavigate()
  const [filterStyle, setFilterStyle] = useState('Menor para maior')
  
  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
  }, [])

  return (
    <DefaultBackground>
      <UserHeader />
      <StyledDiv>
        <FilterButton 
          icon='fas fa-map-marker-alt'
          height='20px'
          width='150px'
          font='10px'
          text='Local de saida'
          mark='fas fa-angle-down'
        />
        <FilterButton 
          icon='fas fa-route'
          height='20px'
          width='150px'
          font='10px'
          text='Tipo de viagem'
          mark='fas fa-angle-down'
        />
      </StyledDiv>
      <StyledFilterType>
        Classificar de: {filterStyle} 
        {
          filterStyle === 'Menor para maior' ?
          <i className="fas fa-angle-down" onClick={() => setFilterStyle('Maior para menor')}></i> 
          :
          <i className="fas fa-angle-up" onClick={() => setFilterStyle('Menor para maior')}></i> 
        }
      </StyledFilterType>
      <DriverList />
      <StyledLoadButton onClick={() => navigate('/user/load')}>
        Adicionar mudança
      </StyledLoadButton>
    </DefaultBackground>
  )
}