import React, { useState } from 'react'
import '../../assets/css/header.css'
import logo from '../../assets/images/logo.png'
import Href from '../basics/href'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return(
    <div className="header-container">
        <div className="logo">
            <img src= {logo} alt="" />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
            <ul>    
                    <li><Href href="#home" label={'HOME'}/></li>
                    <li><Href href="#home" label={'LISTING'}/></li>
                    <li><Href href="#home" label={"LET'S MOVE"}/></li>
                    <li><Href href="#home" label={'ABOUT'}/></li>
            </ul>
        </nav>
    </div>
    );
}