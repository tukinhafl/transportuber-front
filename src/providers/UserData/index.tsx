import { createContext, useContext, useState, useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { IUserContextData, IProviderProps } from '../../types'

const UserDataContext = createContext<IUserContextData>({} as IUserContextData)

export const UserDataProvider = ({ children }: IProviderProps) => {
    const [id, setId] = useState(
        JSON.parse(localStorage.getItem("Id") || "null") 
    )

    useEffect(() => {
        localStorage.setItem("Id", JSON.stringify(id))
    }, [id])

    const setUserId = (token: string) => {
        const id: {user_id: string} = jwt_decode(token)
        localStorage.setItem("Id", JSON.stringify(id.user_id))
        setId(JSON.stringify(id.user_id))
    }

    return (
        <UserDataContext.Provider value={{ id, setId }}>
            {children}
        </UserDataContext.Provider>
    )
}

export const useUserData = () => useContext(UserDataContext)