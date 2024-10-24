import { useAuthContext } from '@/context';
import React from 'react'
import { IoNotificationsOutline } from "react-icons/io5";

const NavBar = ({ HandleNotification }) => {
    const { test } = useAuthContext()
    return (
        <nav className='flex-between py-2 px-16 border-b-2  ' >
            <div>logo</div>
            <div className='flex gap-4 items-center' >
                <div className='cursor-pointer' onClick={HandleNotification} >
                    <IoNotificationsOutline className='h-7 w-7' />
                </div>
                <div className='flex items-center gap-3' onClick={test} >
                    <div className='h-10 w-10 border border-black rounded-full ' >
                        <img src='../images/avatar.png' />
                    </div>
                    <span>Hii Admin</span>
                </div>
            </div>
        </nav>
    )
}

export default NavBar