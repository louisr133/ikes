import { Outlet, Link } from "react-router-dom";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import logo_linear from "../photos/logo-linear.jpg"
import "../Styles/Layout.css"

const Layout = () => {
    return (
        <>
            <header className="header">
                <div className="logo">
                    <img id='logo-linear' src={logo_linear} />
                </div>
                <nav className="nav">
                    <Link to="ikes/">HOME</Link>
                    <Link to="ikes/menu">MENU</Link>
                    <Link to="ikes/events">EVENTS</Link>
                    <Link to="ikes/gallery">GALLERY</Link>
                    <a href='https://www.facebook.com/profile.php?id=100075934792972' target="_blank">
                        <FontAwesomeIcon icon={faFacebook} size="lg" />
                    </a>
                </nav>
            </header>

            <Outlet />
        </>
    );
};

export default Layout;