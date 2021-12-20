import { useEffect } from "react"
import { useUserData } from "../../providers/UserData"
import api from "../../services/api"
import { FilterButton } from "../FilterButton"
import { StyledHeader } from "./style"

export const UserHeader = () => {
  const { userData, id, setUserData } = useUserData()
  const token = JSON.parse(localStorage.getItem('token') || 'null')

  const getUser = async () => {
    const resp = await api.get(`usuario/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
    setUserData(resp.data)
  }
  
  useEffect(() => {
    getUser()
  }, [])

  return (
    <StyledHeader>
      <h1>Bem vindo, {userData.nome}</h1>
      <FilterButton 
        icon='fas fa-truck'
        height='30px'
        width='120px'
        font='10px'
        text='Simular frete'
      />
      <p>Filtrar motoristas por:</p>
      <div className='divFilter'>
        <FilterButton 
          icon='fas fa-weight-hanging'
          height='25px'
          width='105px'
          font='8px'
          text='Capacidade(m3)'
        />
        <FilterButton 
          icon='fas fa-map-marker-alt'
          height='25px'
          width='105px'
          font='8px'
          text='Quantidade de viagens'
        />
        <FilterButton 
          icon='fas fa-star'
          height='25px'
          width='105px'
          font='8px'
          text='Nota dos usuários'
        />
      </div>
    </StyledHeader>
  )
}