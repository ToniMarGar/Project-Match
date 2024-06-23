import * as React from "react";
import { Link } from "react-router-dom";

// Componentes
import ButtonMain from "../Button/ButtonMain/ButtonMain";
import ButtonSecondary from "../Button/ButtonSecondary/ButtonSecondary";
import NavLink from "../NavLink/NavLink";

import './Header.css'

function Header() {
  return (
    <header>
      <Link to='/'>
        {/*<img href='logo.png' className="logo"/>*/}
        <div className="logo"></div>
      </Link>

      <nav className="navigation">
        {/*Barra central de navegación*/}
        <Link to='/Home'> <a> Home</a> </Link>
        <Link to='/Quizz'> <a>Cuestionario</a> </Link>
        <Link to='/'> <a>Hazte premium</a> </Link>
      </nav>

      <div className="auth-actions">
        <Link to='/SignUp'> <ButtonMain text='Inicia sesión'/></Link>
        <Link to='/LogIn'> <ButtonSecondary text='Regístrate'/></Link>
      </div>

    </header>
  );
}

export default Header;