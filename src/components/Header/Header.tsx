import React from 'react';
import logo from '../../assets/logo.svg';

const Header = () => {

    return (
        <>
            <div className="header__container">
                <a href="http://cigo-co.netlify.app" className="header__logo-container">
                    <img  className="header__logo" alt="" src={logo}/>
                    <p>CIGO</p>
                </a>
                <nav className="header__navbar">
                    <ul>
                        <li>
                            <a href="http://cigo-co.netlify.app">INICIO</a>
                        </li>
                        <li>
                            <a href="http://cigo-co.netlify.app">SOBRE NOSOTROS</a>
                        </li>
                        <li>
                            <a href="http://cigo-co.netlify.app">ABOGADOS</a>
                        </li>
                        <li>
                            <a href="http://cigo-co.netlify.app">VOLUNTARIADOS</a>
                        </li>
                        <li>
                            <a href="http://cigo-co.netlify.app">OPORTUNIDADES</a>
                        </li>
                        <li>
                            <a href="http://cigo-co.netlify.app">CONTACTO</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header;