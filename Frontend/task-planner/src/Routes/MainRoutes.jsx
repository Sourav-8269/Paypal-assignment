import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Tasks from '../Pages/Tasks'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Tasks/>} ></Route>
    </Routes>
  )
}

export default MainRoutes