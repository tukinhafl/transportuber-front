import { Route, Routes } from 'react-router'
import { Home } from '../pages/Home'
import { RegisterOption } from '../pages/RegisterOption'
import { WebChat } from '../pages/WebChat'
import TestScreen from '../pages/TestScrenn'
import { Login } from '../pages/Login'
import { UserRegister } from '../pages/UserRegister'
import { DriverRegister } from '../pages/DriverRegister'
import { UserProfile } from '../pages/UserProfile'
import { Load } from '../pages/Load'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<RegisterOption/>} />
      <Route path='/chat' element={<WebChat/>} />
      <Route path='/testscreens' element={<TestScreen/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register/user' element={<UserRegister/>}/>
      <Route path='/register/driver' element={<DriverRegister/>}/>
      <Route path='/user' element={<UserProfile/>}/>
      <Route path='/user/load' element={<Load/>}/>
    </Routes>
  )
}