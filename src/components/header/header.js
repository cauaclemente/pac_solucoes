import React, { useState } from 'react';
import './header.css'
import {FaInstagram, FaFacebook} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo2.png';


function Header() {

    const [active, setActive] = useState('nav-menu')

        const nav_bar = () => {
            active === 'nav-menu'
            ? setActive('nav-menu nav-active') 
            : setActive('nav-menu')
        }

    return (
        <header>
            <nav className="header-content ">
                <div className="header-icons">
                    <a className="fa-brands" href="https://www.instagram.com/pedroalmeidapac/" target="_blank">
                      <FaInstagram />
                    </a>
                    <a className="fa-brands2" href="https://www.facebook.com/PacRevest?mibextid=LQQJ4d" target="_blank">
                        <FaFacebook />
                    </a>
                </div>
                    <img id="logo" src={Logo} alt="" />
            <ul className= {active}>
            <Link className="nav-item" style={{ textDecoration: 'none' }} to = '/'>
                <li>Inicio</li>
            </Link>
            <Link className= "nav-item" style={{ textDecoration: 'none'}} to ='/fotos'>
                <li>Fotos</li>
            </Link>
            <Link className= "nav-item" style={{  textDecoration: 'none'}} to = '/empresa'>
                <li>Empresa</li>
            </Link>
            <Link className= "nav-item" style={{  textDecoration: 'none'}} to = '/contato'>
                <li>Contato</li>
            </Link>
                </ul>
                <div onClick = {nav_bar} className='nav_bar'>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
            </nav>
        </header>
    )
}

export default Header;
