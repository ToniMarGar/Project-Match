import * as React from "react";
import { Link } from "react-router-dom";
import './LogIn.css'
import { useState } from "react";
import { login } from "../../services/auth";
import toast, { Toaster } from 'react-hot-toast';
import Apple from '../../components/Button/AltLogInButton/AppleButton/AppleButton'
import Facebook from '../../components/Button/AltLogInButton/FacebookButton/FacebookButton'
import Google from '../../components/Button/AltLogInButton/GoogleButton/GoogleButton'
import ButtonMain from '../../components/Button/ButtonMain/ButtonMain'
import ButtonSecondary from '../../components/Button/ButtonSecondary/ButtonSecondary'

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    
    const handleLogIn = async () => {
      try {
        let data = { email: email, password: password }
        const result = await login(data)
        localStorage.setItem("token", result.token);
        localStorage.setItem("role", result.role); 
        setEmail("")

      } catch (error) {
        console.log(error)
        toast.error ('Error al hacer Login.')
      }
    }
  return (
    <main className="registration-page">
      <Toaster />
        <section className="form-section">

          <form className="signup-form">
            <div className="input-group">
              <label>Nombre de usuario</label>
              <input type="text" placeholder='Nombre de usuario' onChange={(e) => {
            setEmail(e.target.value);
          }}
          required/>
            </div>

            <div className="input-group">
              <label>Contraseña</label>
              <input type="password" placeholder='Constraseña'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required/>
            </div>

            <p>¿Has olvidado tu contraseña? Haz click{" "}
            <a>aquí</a></p>

            <Link to='/Profile'>
              <ButtonMain text='Inicia sesión' onClick={(e) => {
            e.preventDefault();
            handleLogIn();
          }}/>
          </Link>

            <div className="social-buttons">
              <Apple/> <Facebook/> <Google/>
            </div>

            <p>¿Has olvidado tu contraseña? Haz click{" "}
            <a>aquí</a></p>

            <Link to='/Profile'>
              <ButtonMain text='Inicia sesión' onClick={(e) => {
            e.preventDefault();
            handleLogIn();
          }}/>
            </Link>
            <div className="login-prompt">
              <p>¿Has olvidado tu contraseña? Haz click{" "}
              <a>aquí</a></p>
            </div>
          </form>

          <div className="login-prompt">
            <p className="meta">¿TODAVÍA NO TIENES UNA CUENTA?</p>
            <Link to='/SignUp'>
              <ButtonSecondary text='Regístrate'/>
            </Link>
          </div>
        </section>

        <section className="text-section">
          <p className="huge">Haz match con tu siguente travel
          </p>
          <h1 className='blue'>Inicia sesión y revisa tus últimos destinos</h1>
        </section>
    </main>
  );
}

export default LogIn
