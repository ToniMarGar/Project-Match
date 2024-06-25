import * as React from "react";

import ButtonMain from "../Button/ButtonMain/ButtonMain";
import ButtonSecondary from "../Button/ButtonSecondary/ButtonSecondary";
import NavLink from "../Link/Link";

import './Header.css'
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to='/'>
        {/*<img href='logo.png' className="logo"/>*/}
      </Link>

      <nav className="navigation">
        {/*Barra central de navegación*/}
        <Link to='/'> <NavLink>Home</NavLink> </Link>
        <Link to='/Quizz'> <NavLink>Cuestionario</NavLink> </Link>
        <Link to='/'> <NavLink>Hazte premium</NavLink> </Link>
      </nav>

      <div className="auth-actions">
        <Link to='/'> <ButtonMain>Inicia sesión</ButtonMain> </Link>
        <Link to='/'> <ButtonSecondary>Regístrate</ButtonSecondary> </Link>
      </div>

    </header>
  );
}

export default Header;