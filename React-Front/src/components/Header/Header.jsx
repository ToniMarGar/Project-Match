import * as React from "react";
import { Link } from "react-router-dom";
import './Header.css'


// Componentes
import ButtonMain from "../Button/ButtonMain/ButtonMain";
import ButtonSecondary from "../Button/ButtonSecondary/ButtonSecondary";
import NavLink from "../NavLink/NavLink";


function Header() {
  return (
    <header>
      <Link to='/'>
        {/*<img href='logo.png' className="logo"/>*/}
        <div className="logo"></div>
      </Link>

      <nav className="navigation">
        {/*Barra central de navegación*/}
        <Link to='/Home'><NavLink text='Home'/></Link>
        <Link to='/Quizz'><NavLink text='Tu destino ideal'/></Link>
        <Link to='/Home'><NavLink text='Hazte premium'/></Link>
      </nav>

      <div className="auth-actions">
        <Link to='/LogIn'> <ButtonMain text='Inicia sesión'/></Link>
        <Link to='/SignUp'> <ButtonSecondary text='Regístrate'/></Link>
      </div>

    </header>
  );
}

export default Header;