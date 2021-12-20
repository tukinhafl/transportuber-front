import { IDriverProps } from "../../types"
import { StyledCardDriver } from "./style"

export const CardDriver = ({ driver }: IDriverProps) => {
  return (
    <StyledCardDriver>
      <img src="https://i.pravatar.cc/150" alt="Foto de perfil" />
      <div className='driverContainer'>
        <h1>{driver.nome} {driver.sobrenome}</h1>
        <p>nota: {driver.nota}</p>
        <div className='spanContainer'>
          <span>
            <i className="fas fa-weight-hanging"></i>
            {driver?.caminhoes[0].capacidade_de_carga}m3
          </span>
          <span>
            <i className="fas fa-truck"></i>
            {driver?.caminhoes[0].modelo}
          </span>
          <span>
            <i className="fas fa-map-marker-alt"></i>
            {driver?.caminhoes.length}
          </span>
        </div>
      </div>
    </StyledCardDriver>
  )
}