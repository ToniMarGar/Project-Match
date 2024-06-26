import './Header.css'
import { Link, useNavigate, useLocation } from "react-router-dom"; 

// Componentes
import ButtonMain from "../Button/ButtonMain/ButtonMain";
import ButtonSecondary from "../Button/ButtonSecondary/ButtonSecondary";
import NavLink from "../NavLink/NavLink";
import Logo from '../../assets/brand-assets/travel-match-logo-04.png'
import ButtonProfile from "../Button/ButtonProfile/ButtonProfile";
import { useEffect, useState } from 'react';

function Header() {
  const location = useLocation()
const token = localStorage.getItem("token")
const [isLogged, setIsLogged] = useState(false)
useEffect(() => {
  const logged = () => {
      if(token){
        setIsLogged(true)
      } else {
        setIsLogged(false)
      }
    }
    logged()
  }, [location])
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

      <div></div>

      <div className="auth-actions">
        {isLogged ? <Link to='/Profile'> <ButtonProfile text='Inicia sesión'/></Link> : <><Link to='/LogIn'> <ButtonMain text='Inicia sesión'/></Link><Link to='/SignUp'> <ButtonSecondary text='Regístrate'/></Link></> }
        
      </div>

    </header>
  );
}

export default Header;