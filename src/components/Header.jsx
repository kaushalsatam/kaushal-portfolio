import React from "react";
import HamburgerMenu from "./Hamburger";

function Header() {

    return (
        <>
            <nav id="desktop-nav">
                <div className="logo">kaushal.dev</div>
                <div>
                    <ul className="nav-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <nav id="hamburger-nav">
                <div className="logo">kaushal.dev</div>
                <HamburgerMenu />
            </nav>
        </>
    )
}

export default Header;