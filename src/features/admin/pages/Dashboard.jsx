import React, { useState } from 'react'
import NavBar from '@admin/components/NavBar'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { AdminLnks } from '@/constant'
import Notification from '@admin/pages/Notification'


const Dashboard = () => {
    const location = useLocation()
    const [subMenu,setSubMenu] = useState(false)
    const [notificationOpen, setNotificationOpen] = useState(false)

    return (
        <div>
            <header className='sticky top-0 bg-white' >
                <NavBar HandleNotification={() => setNotificationOpen(!notificationOpen)} />
            </header>
            <section  >
                <aside id="logo-sidebar" className="fixed top-16 left-0 z-40 w-64 h-screen pt-4 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0" aria-label="Sidebar">
                    <div className="h-full px-3 pb-4 overflow-y-auto bg-white ">
                        <ul className="space-y-2 font-medium">
                            {AdminLnks.map((item, index) => (
                                <li key={index} >
                                    <Link to={item?.path} onClick={() => setSubMenu(!subMenu)} className={`flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group ${location.pathname === item.path && "bg-gray-100"} `}>
                                        {<item.icons />}
                                        <span className="ms-3">{item.title}</span>
                                    </Link>
                                    {subMenu && item.submenu && item.submenu.map((subItem, subIndex) => (
                                        <Link to={subItem.path} className={`flex items-center p-2 ps-6 text-gray-900 rounded-lg  hover:bg-gray-100  group ${location.pathname === subItem.path && "bg-gray-100"} `}>
                                            {<subItem.icons />}
                                            <span className="ms-3">{subItem.title}</span>
                                        </Link>
                                    ))}
                                </li>
                            ))}

                        </ul>
                    </div>
                </aside>

                <div className="p-4 ml-64">
                    <Outlet />
                </div>

            </section>

            {notificationOpen && <Notification notificationOpen={notificationOpen}   setNotificationOpen={() => setNotificationOpen(!notificationOpen)} />}
        </div>
    )
}

export default Dashboard