import * as React from "react";
import { Link } from "react-router-dom";
import './SignUp.css'

import Apple from '../../components/Button/AltLogInButton/AppleButton/AppleButton'
import Facebook from '../../components/Button/AltLogInButton/FacebookButton/FacebookButton'
import Google from '../../components/Button/AltLogInButton/GoogleButton/GoogleButton'
import ButtonMain from '../../components/Button/ButtonMain/ButtonMain'
import ButtonSecondary from '../../components/Button/ButtonSecondary/ButtonSecondary'


function LogIn() {
  return (
    <main className="registration-page">
        <section className="form-section">

          <form className="signup-form">
            <div className="input-group">
              <label>Nombre de usuario</label>
              <input type="text" placeholder='Nombre de usuario' />
            </div>

            <div className="input-group">
              <label>Contraseña</label>
              <input type="password" placeholder='Constraseña' />
            </div>

            <div className="social-buttons">
              <Apple/> <Facebook/> <Google/>
            </div>

            <p>¿Has olvidado tu contraseña? Haz click{" "}
            <a>aquí</a></p>

            <Link to='/Profile'>
              <ButtonMain text='Inicia sesión' />
            </Link>
          </form>

          <div className="login-prompt">
            <p className="meta">¿TODAVÍA NO TIENES UNA CUENTA?</p>
            <Link to='/SignUp'>
              <ButtonSecondary text='Regístrate'/>
            </Link>
          </div>
        </section>

        <section className="text-section">
          <p className="huge">Haz <em className="huge-special">match</em> con 
          tu siguente <em className="huge-special">travel</em>
          </p>
          <h1 className='blue'>Inicia sesión y revisa tus últimos destinos</h1>
        </section>
    </main>
  );
}

export default LogIn
