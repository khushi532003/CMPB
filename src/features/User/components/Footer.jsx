import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
                        backgroundImage: "url(https://img.freepik.com/premium-vector/white-crumpled-paper-textured-background-vector_53876-171750.jpg)"
                    }}
                >
                    <footer className="w-full text-gray-700 body-font">
                        <div className="logo flex justify-center">
                            <img
                                className='w-48'
                                src="https://static1.squarespace.com/static/56538fa7e4b0eb26e633fae6/t/5e4b23d4b6e8306d010ab29f/1581982686307/PrimaryLogoTransparentBG.png?format=1500w"
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
                                <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                                    <h4 className="mb-3 text-sm tracking-widest text-gray-900 uppercase font-semibold">About</h4>
                                    <nav className="mb-10 list-none">
                                        <li className="mt-3">
                                            <Link className="text-gray-500 cursor-pointer hover:text-gray-900">Terms &amp; Privacy</Link>
                                        </li>
                                        <li className="mt-3">
                                            <Link className="text-gray-500 cursor-pointer hover:text-gray-900">Pricing</Link>
                                        </li>
                                        <li className="mt-3">
                                            <Link className="text-gray-500 cursor-pointer hover:text-gray-900">FAQ</Link>
                                        </li>
                                    </nav>
                                </div>
                                <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                                    <h4 className="mb-3 text-sm tracking-widest text-gray-900 uppercase font-semibold">Contact</h4>
                                    <nav className="mb-10 list-none">
                                        <li className="mt-3">
                                            <Link className="text-gray-500 cursor-pointer hover:text-gray-900">Send a Message</Link>
                                        </li>
                                        <li className="mt-3">
                                            <Link className="text-gray-500 cursor-pointer hover:text-gray-900">Request a Quote</Link>
                                        </li>
                                        <li className="mt-3">
                                            <Link className="text-gray-500 cursor-pointer hover:text-gray-900">+123-456-7890</Link>
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