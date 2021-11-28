import React from 'react';
import logo from "../../assets/logo.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <section className="section__footer">
                <form className="footer__form">
                    <p>Recibir ultimas noticias</p>
                    <label className="form__label" htmlFor="email">
                        <input className="form__input"
                               type="text"
                               id="email"
                               name="email"
                               placeholder="Correo electronico"
                        />
                    </label>
                    <input className="form__submit" type="submit" value="Entrar" />
                </form>
                <div className="footer__socialMedia">
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-linkedin-in"></i>
                    <i className="fab fa-facebook-f"></i>
                </div>
                <div className="footer__contact">

                </div>
            </section>
            <a href="http://cigo-co.netlify.app" className="header__logo-container">
                <img  className="header__logo" alt="" src={logo}/>
            </a>
        </footer>
    )
}

export default Footer;