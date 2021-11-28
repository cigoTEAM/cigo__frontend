import React from 'react';
import logo from '../../assets/logo.svg';

const Header = () => {

    return (
        <>
            <div className="header__container">
                <a href="#" className="header__logo-container">
                    <img  className="header__logo" alt="" src={logo}/>
                    <p>CIGO</p>
                </a>
                <nav className="header__navbar">
                    <ul>
                        <li>
                            <a href="#">INICIO</a>
                        </li>
                        <li>
                            <a href="#">SOBRE NOSOTROS</a>
                        </li>
                        <li>
                            <a href="#">ABOGADOS</a>
                        </li>
                        <li>
                            <a href="#">VOLUNTARIADOS</a>
                        </li>
                        <li>
                            <a href="#">OPORTUNIDADES</a>
                        </li>
                        <li>
                            <a href="#">CONTACTO</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header;