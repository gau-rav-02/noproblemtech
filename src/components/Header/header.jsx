import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBriefcase, FaPhoneAlt, FaInfoCircle } from 'react-icons/fa';
import './styles.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className='navbar'>
                <div className='navbar-left'>
                    <NavLink to="/" exact>
                        <img src="/img/npl.png" alt="Logo" className="logo" />
                    </NavLink>
                    <h3 className="slogan">Driven by Innovation and Integrity</h3>
                </div>
                <div className={`navbar-right ${isMenuOpen ? 'open' : ''}`}>
                    <NavLink to="/" exact activeClassName="active"> <FaHome /> Home</NavLink>
                    <NavLink to="/career" exact activeClassName="active"> <FaBriefcase /> Career</NavLink>
                    <NavLink to="/contact" exact activeClassName="active"> <FaPhoneAlt /> Contact</NavLink>
                    <NavLink to="/about" exact activeClassName="active"> <FaInfoCircle /> About</NavLink>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                {/* Internships Update on Right Corner */}
                <div className="internship-update">
                    <NavLink to="/career" className="no-decoration">Internships are available!</NavLink>
                </div>
            </div>
        </header>
    );
}

export default Header;
