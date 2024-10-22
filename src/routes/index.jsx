import Dashboard from '@/features/admin/pages/Dashboard'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '@admin/pages/Home'

const RootRouting = () => {
  return (
    <Routes>
        <Route element={<Dashboard/>} >
             <Route path='/' element={<Home/>} />
        </Route>

    </Routes>
  )
}

export default RootRouting