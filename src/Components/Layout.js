import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo_linear from "../photos/logo-linear.jpg";
import "../Styles/Layout.css";

const Layout = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    const handleNavClick = () => {
        setIsNavVisible(false);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <>
            <header className="header">
                <div className="logo">
                    <img id="logo-linear" src={logo_linear} alt="Logo" />
                </div>
                <nav className={`nav ${isNavVisible ? "nav-visible" : ""}`}>
                    <Link to="/" onClick={handleNavClick}>HOME</Link>
                    <Link to="/menu" onClick={handleNavClick}>MENU</Link>
                    <Link to="/events" onClick={handleNavClick}>EVENTS</Link>
                    <Link to="/gallery" onClick={handleNavClick}>GALLERY</Link>
                    <Link to="/about" onClick={handleNavClick}>ABOUT</Link>
                    <a className="fb" onClick={handleNavClick} href='https://www.facebook.com/profile.php?id=100075934792972' target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="lg" />
                    </a>
                </nav>
                <div 
                    className="nav-toggle" 
                    onClick={toggleNav}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        cursor: 'pointer',
                        padding: '10px',
                        borderRadius: '5px'
                    }}
                >
                    <FontAwesomeIcon 
                        icon={faBars} 
                        className="bars-icon" 
                        style={{ color: isHovered ? '#00aced' : '#f4fff1' }} 
                    />
                </div>
            </header>

            <Outlet />
        </>
    );
};

export default Layout;
