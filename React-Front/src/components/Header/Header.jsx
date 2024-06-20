import * as React from "react";

import ButtonMain from "../Button/ButtonMain/ButtonMain";
import ButtonSecondary from "../Button/ButtonSecondary/ButtonSecondary";
import NavLink from "../Link/Link";

import './Header.css'

function Header() {
  return (
    <header>
      <div className="logo">
        {/*<img href='logo.png'/>*/}
      </div>

      <nav className="navigation">
        <a href="#">Home</a>
        <a href="#">Cuestionario</a>
        <a href="#">Hazte premium</a>
      </nav>

      <div className="auth-actions">
        <ButtonMain href="#" text='Inicia sesión'>Inicia sesión</ButtonMain>
        <ButtonSecondary href="#">Regístrate</ButtonSecondary>
      </div>

    </header>
  );
}

export default Header;