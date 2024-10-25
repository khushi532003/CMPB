import Dashboard from '@/features/admin/pages/Dashboard'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdminRoute } from '@/routes/adminRoutes/AdminRoutes'
import UserLayout from '@/routes/userRoutes/UserLayout'
import { UserPublicRoutes } from '@/routes/userRoutes/PublicRoutes'
import { UserPrivateRoutes } from './userRoutes/Privateroutes'
import { AuthRoutes } from '@/routes/authRoutes/AuthRoutes'
import Notfound from '@/features/user/pages/Notfound'

const RootRouting = () => {
    return (
        <Routes>
            <Route element={<Dashboard />} >
                {AdminRoute.map((item, index) => <Route key={index} path={item.path} element={item.element} />)}
            </Route>

            <Route element={<UserLayout />} >
                {UserPublicRoutes.map((item, index) => <Route key={index} path={item.path} element={item.element} />)}

            </Route>
            <Route element={<UserLayout />} >
                {UserPrivateRoutes.map((item, index) => <Route key={index} path={item.path} element={item.element} />)}

            </Route>

            {AuthRoutes.map((item,index) => <Route key={index} path={item.path} element={item.element}/>)}

        <Route path='*' element={<Notfound/>}/>

        </Routes>
    )
}

export default RootRouting