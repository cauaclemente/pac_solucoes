import React, { useState } from 'react';
import './header.css'
import {FaInstagram, FaFacebook} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../src/assets/logo2.png';


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
                    <i className="fa-brands" href="link do insta" target="_blank">
                      <FaInstagram />
                    </i>
                    <i className="fa-brands2" href="link do Facebook" target="_blank">
                        <FaFacebook />
                    </i>
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
