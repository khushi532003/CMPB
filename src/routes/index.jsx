import Dashboard from '@/features/admin/pages/Dashboard'
import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AdminRoute } from '@/routes/adminRoutes/AdminRoutes'
import UserLayout from '@/routes/userRoutes/UserLayout'
import { UserPublicRoutes } from '@/routes/userRoutes/PublicRoutes'
import { UserPrivateRoutes } from './userRoutes/Privateroutes'
import { AuthRoutes } from '@/routes/authRoutes/AuthRoutes'
import Notfound from '@/features/user/pages/Notfound'
import { useAuthContext } from '@/context'

const RootRouting = () => {
    const { role, token } = useAuthContext();

    return (
        <Routes>
            {role === "admin" && token && <Route element={<Dashboard />} >
                {AdminRoute.map((item, index) => (<Route key={index} path={item.path} element={item.element} />))}
            </Route>}

            //Pure public
            {role !== "admin" && <Route element={<UserLayout />} >
                {UserPublicRoutes.map((item, index) => <Route key={index} path={item.path} element={item.element} />)}
            </Route>}

            {role !== "admin" && token ? <Route element={<UserLayout />} >
                {UserPrivateRoutes.map((item, index) =>
                    <Route key={index} path={item.path} element={item.element} />)}
            </Route> : (UserPrivateRoutes.map((item, index) => <Route key={index} path={item.path} element={<Navigate to="/login" />} />))}

            {!token ? AuthRoutes.map((item, index) => <Route key={index} path={item.path} element={item.element} />) : AuthRoutes.map((item, index) => <Route key={index} path={item.path} element={<Navigate to="/" />} />)}

            <Route path='*' element={<Notfound />} />

        </Routes>
    )
}

export default RootRouting;