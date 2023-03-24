import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EditTask from '../Pages/EditTask'
import Tasks from '../Pages/Tasks'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Tasks/>} ></Route>
        <Route path="/edit/:id" element={<EditTask/>} ></Route>
    </Routes>
  )
}

export default MainRoutes