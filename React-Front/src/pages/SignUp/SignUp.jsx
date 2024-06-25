import * as React from "react";
import { Link } from "react-router-dom";
import './SignUp.css'

import Apple from '../../components/Button/AltLogInButton/AppleButton/AppleButton'
import Facebook from '../../components/Button/AltLogInButton/FacebookButton/FacebookButton'
import Google from '../../components/Button/AltLogInButton/GoogleButton/GoogleButton'
import ButtonMain from '../../components/Button/ButtonMain/ButtonMain'
import ButtonSecondary from '../../components/Button/ButtonSecondary/ButtonSecondary'


function SignUp() {
  return (
    <main className="registration-page">
        <section className="form-section">

          <form className="signup-form">
            <div className="input-group">
              <label>Nombre de usuario</label>
              <input type="text" placeholder='Nombre de usuario' />
            </div>

            <div className="input-group">
              <label>Nombre</label>
              <input type="text" placeholder='Nombre' />
            </div>

            <div className="input-group">
              <label>Apellido</label>
              <input type="text" placeholder='Apellido' />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="mail" placeholder='Email' />
            </div>

            <div className="input-group">
              <label>Contraseña</label>
              <input type="password" placeholder='Constraseña' />
            </div>

            <div className="social-buttons">
              <Apple/> <Facebook/> <Google/>
            </div>

            <Link to='/Profile'>
              <ButtonMain text='Regístrate' />
            </Link>
          </form>

          <div className="login-prompt">
            <p className="meta">¿YA TIENES UNA CUENTA?</p>
            <Link to='/LogIn'>
              <ButtonSecondary text='Inicia Sesión'/>
            </Link>
          </div>
        </section>

        <section className="text-section">
          <p className="huge">Haz <em className="huge-special">match</em> con 
          tu siguente <em className="huge-special">travel</em>
          </p>
          <h1 className='blue'>Regístrate para guardar los destinos 
          seleccionados especialmente para ti</h1>
        </section>
    </main>
  );
}

export default SignUp
