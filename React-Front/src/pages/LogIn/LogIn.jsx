import * as React from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { useState } from "react";
import { login } from "../../services/auth";
import toast, { Toaster } from 'react-hot-toast';
<<<<<<< HEAD
import './LogIn.css'

=======
>>>>>>> 4ea830b1356d3db93bf5276398e9f7f1bebb6cfa
import Apple from '../../components/Button/AltLogInButton/AppleButton/AppleButton'
import Facebook from '../../components/Button/AltLogInButton/FacebookButton/FacebookButton'
import Google from '../../components/Button/AltLogInButton/GoogleButton/GoogleButton'
import ButtonMain from '../../components/Button/ButtonMain/ButtonMain'
import ButtonSecondary from '../../components/Button/ButtonSecondary/ButtonSecondary'
<<<<<<< HEAD
=======
import './LogIn.css'
>>>>>>> 4ea830b1356d3db93bf5276398e9f7f1bebb6cfa

function LogIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
    
    const handleLogIn = async () => {
      try {
        let data = { username: username, password: password }
        const result = await login(data)
        localStorage.setItem("token", result.token);
        localStorage.setItem("role", result.role); 
        navigate("/Profile")
      } catch (error) {
        console.log(error)
        toast.error ('Error al hacer Login.')
      }
    }
  return (
    <main className="general-container">
      <section className="registration-page">
        <Toaster />
          <section className="form-section">

          <form className="signup-form" onClick={(e) => e.preventDefault()}>
            <div className="input-group">
              <label>Nombre de usuario</label>
              <input type="text" placeholder='Nombre de usuario' onChange={(e) => {
            setUsername(e.target.value);
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

              <div className="input-group">
                <p>¿Has olvidado tu contraseña? Haz click{" "}
                <a>aquí</a></p>
              </div>

              <Link to='/Profile'>
                <ButtonMain text='Inicia sesión' onClick={(e) => {
              e.preventDefault();
              handleLogIn();
            }}/>
              </Link>

              <div className="social-buttons">
                <Apple/> <Facebook/> <Google/>
              </div>
            </form>

              <ButtonMain text='Inicia sesión' func={
            handleLogIn
          }/>
    
            <div className="social-buttons">
              <Apple/> <Facebook/> <Google/>
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
      </section>
    </main>
  );
}

export default LogIn;