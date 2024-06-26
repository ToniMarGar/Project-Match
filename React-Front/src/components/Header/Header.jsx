import * as React from "react";
import { Link } from "react-router-dom";
import './Header.css'


// Componentes
import ButtonMain from "../Button/ButtonMain/ButtonMain";
import ButtonSecondary from "../Button/ButtonSecondary/ButtonSecondary";
import NavLink from "../NavLink/NavLink";
import Logo from '../../assets/brand-assets/travel-match-logo-04.png'


function Header() {
  return (
    <header>
      <Link to='/'>
        <img 
          src={Logo} 
          className="logo"
        />
        <div className="logo"></div>
      </Link>

      <nav className="navigation">
        {/*Barra central de navegación*/}
        <Link to='/'><NavLink text='Home'/></Link>
        <Link to='/Quizz'><NavLink text='Tu destino ideal'/></Link>
        <Link to='/'><NavLink text='Hazte premium'/></Link>
      </nav>

      <div className="auth-actions">
        <Link to='/LogIn'> <ButtonMain text='Inicia sesión'/></Link>
        <Link to='/SignUp'> <ButtonSecondary text='Regístrate'/></Link>
      </div>

    </header>
  );
}

export default Header;