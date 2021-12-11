import { Route, Routes } from 'react-router'
import { Home } from '../pages/Home'
import { RegisterOption } from '../pages/RegisterOption'
import { WebChat } from '../pages/WebChat'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<RegisterOption/>} />
      <Route path='/chat' element={<WebChat/>} />
    </Routes>
  )
}