import { IProviderProps } from "../types"
import { UserDataProvider } from "./UserData"

export const Providers = ({ children }: IProviderProps) => {
  return (
    <UserDataProvider>
      {children}
    </UserDataProvider>
  )
}