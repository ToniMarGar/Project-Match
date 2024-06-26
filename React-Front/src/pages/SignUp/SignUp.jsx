import * as React from "react";
 import { Link, Navigate, redirect, useNavigate } from "react-router-dom"; 
import './SignUp.css'
import { useState } from "react";

import { signup } from "../../services/auth";


import Apple from '../../components/Button/AltLogInButton/AppleButton/AppleButton'
import Facebook from '../../components/Button/AltLogInButton/FacebookButton/FacebookButton'
import Google from '../../components/Button/AltLogInButton/GoogleButton/GoogleButton'
import ButtonMain from '../../components/Button/ButtonMain/ButtonMain'
import ButtonSecondary from '../../components/Button/ButtonSecondary/ButtonSecondary'

export const SignUp=() =>{
  const [username, setUserName] = useState('');
  const [firstname, setFirstName] = useState('');
  const [surname, setSurName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
      const navigate = useNavigate();
    const handleSignUp = async () => { 
      
        let data = { username: username, firstname: firstname, surname: surname, email: email, password: password }
        const result = await signup(data)
        console.log(result)
        localStorage.setItem("userEmail", result.user)
        localStorage.setItem("token", result.token);
        localStorage.setItem("role", result.role); 
        setEmail("")
        navigate("/Profile")
      }
      return (
        <main className="general-container">
          <section className="registration-page">
              <section className="form-section">
    
                <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="input-group">
                    <label>Nombre de usuario</label>
                    <input type="text" placeholder='Nombre de usuario' onChange={(e) => {
                  setUserName(e.target.value);
                }}
                required/>
                  </div>
    
                  <div className="input-group">
                    <label>Nombre</label>
                    <input type="text" placeholder='Nombre' onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                required/>
                  </div>
    
                  <div className="input-group">
                    <label>Apellido</label>
                    <input type="text" placeholder='Apellido' onChange={(e) => {
                  setSurName(e.target.value);
                }}
                required/>
                  </div>
    
                  <div className="input-group">
                    <label>Email</label>
                    <input type="mail" placeholder='Email' onChange={(e) => {
                  setEmail(e.target.value);
                }}
              value={email}
                required/>
                  </div>
    
                  <div className="input-group">
                    <label>Contraseña</label>
                    <input type="password" placeholder='Constraseña' onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required/>
                  </div>
    
                  <Link to='/Profile'>
                  <ButtonMain text='Regístrate' func={handleSignUp}/>
                  </Link>
    
                  <div className="social-buttons">
                    <Apple/> <Facebook/> <Google/>
                  </div>
    
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
          </section>
        </main>
        );
}

