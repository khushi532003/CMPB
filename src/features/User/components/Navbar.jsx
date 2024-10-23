import React, { useEffect, useState } from 'react';

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
               
               
               
                + <p>+91 9966995565</p>
                <p>kdw@gmail.com</p>
            </div>
        </div>
          {/* Responsive Bar for mobile */}
          <div className="responsive-bar md:hidden fixed top-0 left-0 w-full h-15 bg-gray-800 flex justify-between items-center p-5 z-10">
              <div className="logo">
                  <img src="http://www.mhf.org.au/media/zoo/images/yourlogohere_2cb8c31ab01096e7842d781ac311a776.png" alt="logo" className="h-12" />
              </div>
              <h4 onClick={() => setMenuOpen(!menuOpen)} className="text-white cursor-pointer uppercase">Menu</h4>
          </div>

          {/* Navbar */}
          <nav className={`fixed top-0 left-0 w-full transition-all duration-500 ${scrolling ? 'bg-gray-800 h-16 p-2' : 'bg-transparent h-24 p-4'}`}>
              <div className="flex items-center justify-between h-full">
                  <div className="logo">
                      <img src="http://www.mhf.org.au/media/zoo/images/yourlogohere_2cb8c31ab01096e7842d781ac311a776.png" alt="logo" className={`transition-all duration-500 ${scrolling ? 'h-14' : 'h-20'}`} />
                  </div>
                  <ul className={`hidden md:flex space-x-4 ${scrolling ? 'text-white' : 'text-gray-800'}`}>
                      <li><a href="#" className="hover:bg-red-500 hover:text-white transition duration-500 px-4 py-2">Home</a></li>
                      <li><a href="#" className="hover:bg-red-500 hover:text-white transition duration-500 px-4 py-2">About us</a></li>
                      <li><a href="#" className="hover:bg-red-500 hover:text-white transition duration-500 px-4 py-2">Active members</a></li>
                      <li><a href="#" className="hover:bg-red-500 hover:text-white transition duration-500 px-4 py-2">Ineterested</a></li>
                      <li><a href="#" className="hover:bg-red-500 hover:text-white transition duration-500 px-4 py-2">Contact Us</a></li>
                  </ul>
              </div>
          </nav>

          {/* Mobile Menu */}
          <ul className={`md:hidden absolute top-16 left-0 w-full bg-gray-800 ${menuOpen ? 'block' : 'hidden'}`}>
              <li><a href="#" className="block text-white text-center p-4 hover:bg-red-500">Home</a></li>
              <li><a href="#" className="block text-white text-center p-4 hover:bg-red-500">About us</a></li>
              <li><a href="#" className="block text-white text-center p-4 hover:bg-red-500">Active Members</a></li>
              <li><a href="#" className="block text-white text-center p-4 hover:bg-red-500">Interested</a></li>
              <li><a href="#" className="block text-white text-center p-4 hover:bg-red-500">Contact Us</a></li>
          </ul>
    </div>
  )
}

export default Navbar
