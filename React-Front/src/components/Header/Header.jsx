import * as React from "react";

// Componentes
import ButtonMain from "../Button/ButtonMain/ButtonMain";
import ButtonSecondary from "../Button/ButtonSecondary/ButtonSecondary";
import NavLink from "../NavLink/NavLink";

import './Header.css'
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to='/'>
        {/*<img href='logo.png' className="logo"/>*/}
        <div className="logo"></div>
      </Link>

      <nav className="navigation">
        {/*Barra central de navegación*/}
        <Link to='/Home'> <a text='Home'> Home</a> </Link>
        <Link to='/Quizz'> <a>Cuestionario</a> </Link>
        <Link to='#'> <a>Hazte premium</a> </Link>
      </nav>

      <div className="auth-actions">
        <Link to='/SignUp'> <ButtonMain>Inicia sesión</ButtonMain> </Link>
        <Link to='/LogIn'> <ButtonSecondary>Regístrate</ButtonSecondary> </Link>
      </div>

    </header>
  );
}

export default Header;