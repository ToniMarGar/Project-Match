import * as React from "react";
import Router from 'react-router-dom'

import ButtonMain from "../Button/ButtonMain/ButtonMain";
import ButtonSecondary from "../Button/ButtonSecondary/ButtonSecondary";
import NavLink from "../Link/Link";

import './Header.css'

function Header() {
  return (
    <header>
      <div href="#" className="logo">
        <img href='logo.png'/>
      </div>

      <nav className="navigation">
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">Cuestionario</NavLink>
        <NavLink href="#">Hazte premium</NavLink>
      </nav>

      <div className="auth-actions">
        <ButtonMain href="#">Inicia sesión</ButtonMain>
        <ButtonSecondary href="#">Regístrate</ButtonSecondary>
      </div>

    </header>
  );
}

export default Header;