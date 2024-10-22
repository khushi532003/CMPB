import Navbar from '@user/components/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default UserLayout