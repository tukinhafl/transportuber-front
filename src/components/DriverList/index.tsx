import { useEffect, useState } from "react"
import api from "../../services/api"
import { CardDriver } from "../CardDriver"
import { StyledDriverList } from "./style"

export const DriverList = () => {
  const [driverList, setDriverList] = useState([])
  const token = JSON.parse(localStorage.getItem('token') || 'null')

  const getDrivers = async () => {
    const resp = await api.get('motorista', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    setDriverList(resp.data)
  }

  useEffect(() => {
    getDrivers()
  }, [])

  return (
    <StyledDriverList>
      {driverList?.map((elm, i) => 
        <CardDriver key={i} driver={elm}/>
      )}
    </StyledDriverList>
  )
}