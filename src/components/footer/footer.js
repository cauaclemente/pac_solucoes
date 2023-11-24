import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Logo from '../../assets/logo2.png';
import './footer.css'

function Footer() {
    
    return (
        <>
            <footer className="footer">
                <div className="footer-icons">
                    <a className="fa-brands" href="https://www.instagram.com/pedroalmeidapac/" target="_blank">
                        <FaInstagram />
                    </a>
                    <a className="fa-brands2" href="https://www.facebook.com/PacRevest?mibextid=LQQJ4d" target="_blank" >
                        <FaFacebook />
                    </a>
                </div>
                <p className="text-info">
                pacsolucoesrevest@gmai.com
                <h4>(11) 97790-9698 - Vanessa</h4>
                <h4>(11) 98024-9542 - Carol</h4>
                </p>
                <div className="logo-footer">
                    <img src={Logo} alt="logo da empresa" />
                </div>
                <p className="direitos"> Copyrigth © 2023 - Todos os direitos reservados.</p>
            </footer>
            <a href="link do whats"
            className="btn-whats"
            target="_blank" > 
            <a className="fa-whats">
            <FaWhatsapp />
            </a>
            <span className="text-whats"> Solicite seu orçamento</span>
            </a>
        </>
    )
}

export default Footer;