import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TfiClose } from "react-icons/tfi";
import { useAuthContext } from '@/context';
import ConfirmModal from './ConfirmModal';

function Navbar() {
    const [scrolling, setScrolling] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [sideBarToggle, setSidebarToggle] = useState(false);
    const { token, Logout, deactivateAccount, name } = useAuthContext();
    const navigate = useNavigate();
    const [showConfirm, setShowConfirm] = useState(false);
    const [ProfileImage, setProfileImage] = useState(localStorage.getItem("ProfileImage"));

    const handleCancel = () => {
        setShowConfirm(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLinkClick = (path) => {
        setMenuOpen(false);
       navigate(path);
    };

    return (
        <div>
            <div className="topbar flex justify-between text-xs sm:text-sm z-50 items-center bg-RedTheme text-[#f9e4e9] py-2 px-2">
                <div className="flex gap-2">
                    <Link to="tel:9870101514"><p className='border-r-2 border-white pe-2'>+91 9870101514</p></Link>
                    <Link to="mailto:chatmangnipatbyahteam@gmail.com"><p>chatmangnipatbyahteam@gmail.com</p></Link>
                </div>
            </div>

            {/* Responsive Bar for mobile */}
            <div className={`responsive-bar md:hidden left-0 w-full ${scrolling ? 'bg-gray-800 h-16 p-2 top-0 fixed' : 'bg-white h-20 p-4 relative'} flex justify-between items-center p-5 z-50`}>
                <Link to="/">
                    <div className="logo">
                        <img src={scrolling ? "./images/CMPB-White.png" : "./images/logo.png"} alt="logo" className="h-12" />
                    </div>
                </Link>
                <div className="sideMenu flex gap-2">
                    <h4 onClick={() => setMenuOpen(!menuOpen)} className={`${scrolling ? 'text-white' : 'text-gray-800'} cursor-pointer uppercase`}>Menu</h4>
                    {token ? (
                        <li className='list-none' onClick={() => setSidebarToggle(true)}>
                            <img src={ProfileImage} alt="profile" className='w-7 h-7 rounded-full' />
                            <span className='text-sm text-white'>{name}</span>
                        </li>
                    ) : (
                        <li className='list-none'>
                            <Link to="/login" className="bg-RedTheme rounded-sm text-white transition duration-500 px-4 py-2">Login</Link>
                        </li>
                    )}
                </div>

                {/* Mobile Menu */}
                <ul className={`md:hidden absolute top-[4rem] z-50 left-0 w-full bg-gray-800 ${menuOpen ? 'block' : 'hidden'}`}>
                    <li><Link to="/" onClick={() => handleLinkClick('/')} className="block text-white text-center p-4 rounded-sm hover:bg-RedTheme">Home</Link></li>
                    <li><Link to="/about" onClick={() => handleLinkClick('/about')} className="block text-white text-center p-4 rounded-sm hover:bg-RedTheme">About us</Link></li>
                    <li><Link to="/happyStories" onClick={() => handleLinkClick('/happyStories')} className="block text-white hover:bg-RedTheme text-center p-4 rounded-sm">Happy Stories</Link></li>
                    <li><Link to="/contact" onClick={() => handleLinkClick('/contact')} className="block text-white hover:bg-RedTheme text-center p-4 rounded-sm">Contact Us</Link></li>
                </ul>
            </div>

            {/* Navbar */}
            <nav className={`hidden md:block z-50 left-0 w-full shadow-md transition-all duration-500 ${scrolling ? 'bg-gray-800 fixed h-16 p-2 top-0' : 'bg-white h-20 p-4 relative'}`}>
                <div className="flex items-center justify-between h-full">
                    <Link to="/">
                        <div className="logo">
                            <img src={scrolling ? "./images/CMPB-White.png" : "./images/logo.png"} alt="logo" className={`transition-all duration-500 ${scrolling ? 'h-14' : 'h-20'}`} />
                        </div>
                    </Link>
                    <ul className={`hidden md:flex items-center space-x-4 ${scrolling ? 'text-white' : 'text-gray-800'}`}>
                        <li><Link to="/" onClick={() => handleLinkClick('/')} className="hover:bg-RedTheme rounded-sm hover:text-white transition duration-500 px-4 py-2">Home</Link></li>
                        <li><Link to="/about" onClick={() => handleLinkClick('/about')} className="hover:bg-RedTheme rounded-sm hover:text-white transition duration-500 px-4 py-2">About us</Link></li>
                        <li><Link to="/happyStories" onClick={() => handleLinkClick('/happyStories')} className="hover:bg-RedTheme rounded-sm hover:text-white transition duration-500 px-4 py-2">Happy Stories</Link></li>
                        <li><Link to="/contact" onClick={() => handleLinkClick('/contact')} className="hover:bg-RedTheme rounded-sm hover:text-white transition duration-500 px-4 py-2">Contact Us</Link></li>
                        {token ? (
                            <li onClick={() => setSidebarToggle(true)} className='text-center cursor-pointer'>
                                <img src={ProfileImage} alt="profile" className='w-7 h-7 rounded-full' />
                                <span className='text-sm font-medium text-center'>{name}</span>
                            </li>
                        ) : (
                            <li>
                                <Link to="/login" className="bg-RedTheme rounded-sm text-white transition duration-500 px-4 py-2">Login</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </nav>

            {sideBarToggle && (
                <div className="sidebar bg-white w-64 sm:w-80 p-5 z-50 fixed right-0 top-0 h-[100vh]">
                    <div className="flex justify-between items-center">
                        <div className="username flex items-center gap-3">
                            <img src={ProfileImage} alt="profile" className='w-10 h-10 rounded-full' />
                            <span className='text-2xl font-medium text-RedTheme'>{name}</span>
                        </div>
                        <div className="close text-2xl cursor-pointer" onClick={() => setSidebarToggle(false)}>
                            <TfiClose />
                        </div>
                    </div>
                    <div className="menus w-full pt-20">
                        <ul>
                            <li onClick={() => { setSidebarToggle(false); handleLinkClick('/manage_profile'); }} className='cursor-pointer text-lg border-b border-[#BB1A04] ps-5 py-3'>
                                <span>Manage Profile</span>
                            </li>
                            <li onClick={() => { setSidebarToggle(false); handleLinkClick('/members'); }} className='cursor-pointer text-lg border-b border-[#BB1A04] ps-5 py-3'>
                                <span>Active Members</span>
                            </li>

                            <li onClick={() => { setSidebarToggle(false); handleLinkClick('/purchaseHistory'); }} className='cursor-pointer text-lg border-b border-[#BB1A04] ps-5 py-3'>
                                <span>Your Packages</span>
                            </li>
                            <li onClick={() => { setSidebarToggle(false); handleLinkClick('/changePassword'); }} className='cursor-pointer text-lg border-b border-[#BB1A04] ps-5 py-3'>
                                <span>Change Password</span>
                            </li>
                            <li onClick={() => { setSidebarToggle(false); Logout(); }} className='cursor-pointer text-lg border-b border-[#BB1A04] ps-5 py-3'>
                                Log Out
                            </li>
                        </ul>
                    </div>
                </div>
            )}
            <ConfirmModal
                isOpen={showConfirm} // Show modal if showConfirm is true
                onClose={handleCancel} // Close the modal when the user clicks Cancel
                onConfirm={deactivateAccount} // Trigger the deactivation when user confirms
                message="Are you sure you want to deactivate your account?" // Message in the modal
            />
        </div>
    );
}

export default Navbar;