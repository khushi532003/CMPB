import React, { useEffect } from 'react';
import { FaYoutube } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdCall, IoMdMail } from 'react-icons/io';

function ScrollTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function Footer() {
    return (
        <div>
            <ScrollTop />
            <footer className="">
                <div
                    className="flex items-end w-full bg-cover bg-left bg-no-repeat"
                    style={{
                        backgroundImage: "url(./images/footerBg.jpg)"
                    }}
                >
                    <footer className="w-full text-gray-700 body-font pt-4">
                        <div className="logo flex justify-center">
                            <img
                                className='w-48'
                                src="./images/logo.png"
                                alt="logo"
                            />
                        </div>
                        <div className="container flex flex-col flex-wrap px-8 py-10 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
                            <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                                <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                                    <h4 className="mb-3 text-sm tracking-widest text-gray-900 uppercase font-semibold">Login/Register</h4>
                                    <nav className="mb-10 list-none">
                                        <li className="mt-3">
                                            <Link to="/login" className="text-gray-500 cursor-pointer hover:text-gray-900">Login</Link>
                                        </li>
                                        <li className="mt-3">
                                            <Link to="/register" className="text-gray-500 cursor-pointer hover:text-gray-900">Register</Link>
                                        </li>
                                    </nav>
                                </div>
                                <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                                    <h4 className="mb-3 text-sm tracking-widest text-gray-900 uppercase font-semibold">Quick Links</h4>
                                    <nav className="mb-10 list-none">
                                        <li className="mt-3">
                                            <Link to="/about" className="text-gray-500 cursor-pointer hover:text-gray-900">About</Link>
                                        </li>
                                        <li className="mt-3">
                                            <Link to="/happyStories" className="text-gray-500 cursor-pointer hover:text-gray-900">Happy Stories</Link>
                                        </li>
                                        <li className="mt-3">
                                            <Link to="/contact" className="text-gray-500 cursor-pointer hover:text-gray-900">Contact us</Link>
                                        </li>
                                    </nav>
                                </div>
                                <div className="w-full px-4 lg:w-2/4 md:w-1/2">
                                    <h4 className="mb-3 text-sm tracking-widest text-gray-900 uppercase font-semibold">Contact us</h4>
                                    <nav className="mb-10 list-none">
                                        <li className="mt-3">
                                            <Link to="tel:9870101514" className="text-gray-500 flex gap-2 items-center cursor-pointer hover:text-gray-900"><IoMdCall /> + 91 9870101514</Link>
                                        </li>
                                        <li className="mt-3">
                                            <Link to="mailto:chatmangnipatbyahteam@gmail.com" className="text-gray-500 cursor-pointer flex gap-2 items-center hover:text-gray-900"><IoMdMail />chatmangnipatbyahteam@gmail.com</Link>
                                        </li>

                                    </nav>
                                </div>
                                <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                                    <h4 className="mb-3 text-sm tracking-widest text-gray-900 uppercase font-semibold">Connect with us</h4>
                                    <nav className="mb-10 list-none">
                                        <li className="mt-3 flex gap-5 ">
                                            <Link to="https://youtube.com/@chatmangnipatbyah-o6c?si=lwPo2X8sVRYMQP6Z" target='_blank' className="text-RedTheme cursor-pointer text-2xl"><FaYoutube /> </Link>
                                            <Link to="https://www.instagram.com/chat.mangnipatbyah?igsh=YzljYTk1ODg3Zg==" target='_blank' className="text-RedTheme cursor-pointer text-2xl"><RiInstagramFill /> </Link>
                                            <Link to="https://x.com/PatByah6733" target='_blank' className="text-RedTheme cursor-pointer text-2xl"><FaXTwitter /></Link>
                                        </li>

                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="bg-RedTheme">
                            <div className="container px-5 py-4 mx-auto">
                                <p className="text-sm text-white capitalize xl:text-center">© 2024 All rights reserved</p>
                            </div>
                        </div>
                    </footer>
                </div>
            </footer>
        </div>
    );
}

export default Footer;