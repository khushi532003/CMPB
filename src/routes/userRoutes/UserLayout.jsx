import Navbar from '@user/components/Navbar'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

const UserLayout = () => {
  const locationAuthPath = useLocation();
  const hideNavbarFooter = ["/register", "/login"].includes(locationAuthPath.pathname);

  return (
    <div>
      {!hideNavbarFooter && <Navbar />}
      <Outlet />
    </div>
  )
}

export default UserLayout;