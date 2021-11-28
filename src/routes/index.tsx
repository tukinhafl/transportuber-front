import { Route, Routes } from 'react-router'
import { Home } from '../pages/Home'
import { RegisterOption } from '../pages/RegisterOption'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<RegisterOption/>} />
    </Routes>
  )
}