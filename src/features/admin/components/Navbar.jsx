import React from 'react'


const NavBar = () => {

    return (
        <nav className='flex-between py-2 px-10 border-b-2  ' >

            <div>
                <img className='w-32' src="../images/logo.png" alt="img" />
            </div>
            <div className='flex gap-4 items-center' >
                <div className='flex items-center gap-3'  >
                    <div className='h-10 w-10 border border-black rounded-full ' >
                        <img src='../images/avatar.png' />
                    </div>
                    <span>Hi Admin</span>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;