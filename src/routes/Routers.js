import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import ProductList from '../pages/ProductList'
import ToDoList from '../pages/ToDoList'



const Routers = () => 
{
  return <Routes>
    <Route path='/' element={<Navigate to='/ProductList' />} />
    <Route path = '/ProductList' element={<ProductList/>} />
    <Route path = '/ToDoList' element={<ToDoList/>} />
  </Routes>
}

export default Routers