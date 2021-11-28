import React from 'react';
import logo from '../../assets/logo.svg';

const Header = () => {

    return (
        <section className="header__container">
            <a href="http://cigo-co.netlify.app" className="header__logo-container">
                <img  className="header__logo" alt="" src={logo}/>
                <p>CIGO</p>
            </a>
            <nav className="header__navbar">
                <ul>
                    <li>
                        <a href="http://cigo-co.netlify.app">Inicio</a>
                    </li>
                    <li>
                        <a href="http://cigo-co.netlify.app">¿Qué es CIGO?</a>
                    </li>
                    <li>
                        <a href="http://cigo-co.netlify.app">ABOGADOS</a>
                    </li>
                    <li>
                        <a href="http://cigo-co.netlify.app">Oportunidades</a>
                    </li>
                    <li>
                        <a href="http://cigo-co.netlify.app">Contacto</a>
                    </li>
                </ul>
            </nav>
            <button
                className="header__button"
            >
                Reportar un caso
            </button>
        </section>
    )
}

export default Header;