import { Route, Routes } from 'react-router'
import { Home } from '../pages/Home'
import { RegisterOption } from '../pages/RegisterOption'
import { WebChat } from '../pages/WebChat'
import TestScreen from '../pages/TestScrenn'
import { Login } from '../pages/Login'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<RegisterOption/>} />
      <Route path='/chat' element={<WebChat/>} />
      <Route path='/testscreens' element={<TestScreen/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}