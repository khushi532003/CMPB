import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    const [scrolling, setScrolling] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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
        <div className="topbar flex justify-between text-xs items-center bg-pink-300 py-2 px-2">
            <p></p>
            <div className="flex gap-2">
               
               
               
                <p>+91 9966995565</p>
                <p>kdw@gmail.com</p>
            </div>
            {/* Responsive Bar for mobile */}
            <div className="responsive-bar md:hidden fixed top-4 left-0 w-full h-15 bg-gray-800 flex justify-between items-center p-5 z-10">
                <div className="logo">
                    <img src="http://www.mhf.org.au/media/zoo/images/yourlogohere_2cb8c31ab01096e7842d781ac311a776.png" alt="logo" className="h-12" />
                </div>
                <h4 onClick={() => setMenuOpen(!menuOpen)} className="text-white cursor-pointer uppercase">Menu</h4>
            </div>

            {/* Navbar */}
            <nav className={`fixed  z-50 left-0 w-full transition-all duration-500 ${scrolling ? 'bg-gray-800 h-16 p-2 top-0' : 'bg-white h-20 p-4'}`}>
                <div className="flex items-center justify-between h-full">
                    <div className="logo">
                        <img src="https://static1.squarespace.com/static/56538fa7e4b0eb26e633fae6/t/5e4b23d4b6e8306d010ab29f/1581982686307/PrimaryLogoTransparentBG.png?format=1500w" alt="logo" className={`transition-all duration-500 ${scrolling ? 'h-14' : 'h-20'}`} />
                    </div>
                    <ul className={`hidden md:flex space-x-4 ${scrolling ? 'text-white' : 'text-gray-800'}`}>
                        <li><Link to="/" className="hover:bg-[#BB1A04] rounded-sm hover:text-white transition duration-500 px-4 py-2">Home</Link></li>
                        <li><Link to="/about" className="hover:bg-[#BB1A04]  rounded-sm hover:text-white transition duration-500 px-4 py-2">About us</Link></li>
                        <li><Link to="/" className="hover:bg-[#BB1A04]  rounded-sm hover:text-white transition duration-500 px-4 py-2">Active members</Link></li>
                        <li><Link to="/" className="hover:bg-[#BB1A04]  rounded-sm hover:text-white transition duration-500 px-4 py-2">Ineterested</Link></li>
                        <li><Link to="/contact" className="hover:bg-[#BB1A04]  rounded-sm hover:text-white transition duration-500 px-4 py-2">Contact Us</Link></li>
                    </ul>
                </div>
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