import React from 'react'
import { IoNotificationsOutline} from "react-icons/io5";

const NavBar = ({ HandleNotification }) => {
    return (
        <nav className='flex-between py-2 px-16 border-b-2' >
            <div>logo</div>
            <div className='flex gap-4 items-center' >
                <div className='cursor-pointer' onClick={HandleNotification} >
                    <IoNotificationsOutline className='h-7 w-7' />
                </div>
                <div className='h-10 w-10 border border-black rounded-full ' >
                    
                    <img src='../images/avatar.png' />
                </div>
            </div>
        </nav>
    )
}

export default NavBar