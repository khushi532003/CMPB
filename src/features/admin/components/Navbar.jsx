import React from 'react'

const NavBar = () => {
    return (
        <nav className='flex-between py-2 px-16 border-b-2' >
            <div>logo</div>
            <div>
                <div className='h-10 w-10 border border-black rounded-full' >
                    <img src='../images/avatar.png' />
                </div>
            </div>
        </nav>
    )
}

export default NavBar