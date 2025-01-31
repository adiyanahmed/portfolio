import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleMenuClick = () => setShowMenu(!showMenu);

    return (
        <div className="w-full h-[76px] flex justify-between items-center px-4 z-10 text-gray-200 bg-[#fa6e43] fixed">
            {/* Mobile Menu */}
            <ul className={showMenu ? 'absolute bg-[#2f1f28] w-full h-screen top-0 left-0 flex flex-col justify-center items-center z-10' : 'hidden'}>
                <li className="text-3xl py-7">
                    <Link to="main" smooth={true} duration={500} onClick={handleMenuClick}>Home</Link>
                </li>
                <li className="text-3xl py-7">
                    <Link to="about" smooth={true} duration={500} offset={-76} onClick={handleMenuClick}>About</Link>
                </li>
                <li className="text-3xl py-7">
                    <Link to="resume" smooth={true} duration={500} offset={-76} onClick={handleMenuClick}>Resume</Link>
                </li>
                <li className="text-3xl py-7">
                    <Link to="contact" smooth={true} duration={500} offset={-76} onClick={handleMenuClick}>Contact</Link>
                </li>
            </ul>

            {/* Logo */}
            <div>
                <h1>Adiyan A. Ahmed</h1>
            </div>

            {/* Desktop Menu */}
            <div>
                <ul className="hidden md:flex space-x-6">
                    <li><Link to="main" smooth={true} duration={500}>Home</Link></li>
                    <li><Link to="about" smooth={true} duration={500} >About</Link></li>
                    <li><Link to="resume" smooth={true} duration={500} offset={-76}>Resume</Link></li>
                    <li><Link to="contact" smooth={true} duration={500} offset={-76}>Contact</Link></li>
                </ul>
            </div>

            {/* Mobile Toggle Button */}
            <button className="md:hidden z-10" onClick={handleMenuClick}>
                {showMenu ? <FaTimes /> : <FaBars />}
            </button>
        </div>
    );
};

export default NavBar;
