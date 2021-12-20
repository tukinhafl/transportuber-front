import { createContext, useContext, useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { IUserContextData, IProviderProps, IUserData } from '../../types'

const UserDataContext = createContext<IUserContextData>({} as IUserContextData)

export const UserDataProvider = ({ children }: IProviderProps) => {
    const [id, setId] = useState(
        JSON.parse(localStorage.getItem("Id") || "null") 
    )
    const [userData, setUserData] = useState<IUserData>({} as IUserData)

    useEffect(() => {
        localStorage.setItem("Id", JSON.stringify(id))
    }, [id])

    const setUserId = (token: string) => {
        const id: {sub: number} = jwt_decode(token)
        localStorage.setItem("Id", JSON.stringify(id.sub))
        setId(JSON.stringify(id.sub))
    }

    return (
        <UserDataContext.Provider value={{ id, setUserId, setUserData, userData }}>
            {children}
        </UserDataContext.Provider>
    )
}

export const useUserData = () => useContext(UserDataContext)