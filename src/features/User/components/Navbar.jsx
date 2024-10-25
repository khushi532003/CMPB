import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TfiClose } from "react-icons/tfi";

function Navbar() {

    const [scrolling, setScrolling] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [sideBarToggle, setSidebarToggle] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div>
            <div className="topbar flex justify-between text-sm z-50 items-center bg-[#BB1A04] text-[#f9e4e9] py-2 px-2">
                <p></p>
                <div className="flex gap-2">
                    <p className='border-r-2 border-white pe-2'>+91 9966995565 </p>
                    <p>kdw@gmail.com</p>
                </div>
            </div>
            {/* Responsive Bar for mobile */}
            <div className="responsive-bar md:hidden fixed top-4 left-0 w-full h-15 bg-gray-800 flex justify-between items-center p-5 z-10">
                <div className="logo">
                    <img src="http://www.mhf.org.au/media/zoo/images/yourlogohere_2cb8c31ab01096e7842d781ac311a776.png" alt="logo" className="h-12" />
                </div>
                <h4 onClick={() => setMenuOpen(!menuOpen)} className="text-white cursor-pointer uppercase">Menu</h4>
            </div>

            {/* Navbar */}
            <nav className={`fixed  z-50 left-0 w-full shadow-md transition-all duration-500 ${scrolling ? 'bg-gray-800 h-16 p-2 top-0' : 'bg-white h-20 p-4'}`}>
                <div className="flex items-center justify-between h-full">
                    <div className="logo">
                        <img src="https://static1.squarespace.com/static/56538fa7e4b0eb26e633fae6/t/5e4b23d4b6e8306d010ab29f/1581982686307/PrimaryLogoTransparentBG.png?format=1500w" alt="logo" className={`transition-all duration-500 ${scrolling ? 'h-14' : 'h-20'}`} />
                    </div>
                    <ul className={`hidden md:flex space-x-4 ${scrolling ? 'text-white' : 'text-gray-800'}`}>
                        <li><Link to="/" className="hover:bg-[#BB1A04] rounded-sm hover:text-white transition duration-500 px-4 py-2">Home</Link></li>
                        <li><Link to="/about" className="hover:bg-[#BB1A04]  rounded-sm hover:text-white transition duration-500 px-4 py-2">About us</Link></li>
                        <li><Link to="/happyStories" className="hover:bg-[#BB1A04]  rounded-sm hover:text-white transition duration-500 px-4 py-2">Happy Stories</Link></li>
                        <li><Link to="/contact" className="hover:bg-[#BB1A04]  rounded-sm hover:text-white transition duration-500 px-4 py-2">Contact Us</Link></li>
                        {/* <li><Link to="/login" className="bg-[#BB1A04]  rounded-sm text-white transition duration-500 px-4 py-2">Login</Link></li> */}
                        <li onClick={() => setSidebarToggle(true)}><Link className="bg-[#BB1A04]  rounded-sm text-white transition duration-500 px-4 py-2">Account</Link></li>
                    </ul>
                </div>
                {sideBarToggle ? <div className="sidebar  bg-white w-80 p-5 fixed right-0 top-0 h-[100vh]">
                    <div className="flex justify-between items-center">
                        <div className="username "><h3 className='text-4xl'>Shreya Mehra</h3></div>
                        <div className="close text-2xl cursor-pointer" onClick={() => setSidebarToggle(false)}>
                            <TfiClose />
                        </div>
                    </div>
                    <div className="menus  w-full pt-20">
                        <ul>
                            <li className='text-lg border-b border-[#BB1A04] ps-5 py-3'><Link to="">Manage Profile</Link></li>
                            <li className='text-lg border-b border-[#BB1A04] ps-5 py-3'><Link to="/members">Active Members</Link></li>
                            <li className='text-lg border-b border-[#BB1A04] ps-5 py-3'><Link to="/myInterests">My Interests</Link></li>
                            <li className='text-lg border-b border-[#BB1A04] ps-5 py-3'><Link to="/purchaseHistory">Your Packages</Link></li>
                            <li className='text-lg border-b border-[#BB1A04] ps-5 py-3'><Link to="/changePassword">Change Password</Link></li>
                            <li className='text-lg border-b border-[#BB1A04] ps-5 py-3'><Link to="/deleteAccount">Delete Account</Link></li>
                        </ul>
                    </div>
                </div> : ""}
            </nav>

            {/* Mobile Menu */}
            <ul className={`md:hidden absolute top-16 left-0 w-full bg-gray-800 ${menuOpen ? 'block' : 'hidden'}`}>
                <li><Link to="/" className="block text-white text-center p-4  rounded-sm hover:bg-[#BB1A04]">Home</Link></li>
                <li><Link to="/about" className="block text-white text-center p-4  rounded-sm hover:bg-[#BB1A04]">About us</Link></li>
                <li><Link to="/" className="block text-white text-center p-4  rounded-sm hover:bg-[#BB1A04]">Active Members</Link></li>
                <li><Link to="/" className="block text-white text-center p-4  rounded-sm hover:bg-[#BB1A04]">Interested</Link></li>
                <li><Link to="/contact" className="block text-white text-center p-4  rounded-sm hover:bg-[#BB1A04]">Contact Us</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;