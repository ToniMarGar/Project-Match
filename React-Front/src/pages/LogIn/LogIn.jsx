import * as React from "react";

import LogAppleButton from "../../components/Button/AltLogInButton/AppleButton/AppleButton";
import LogFacebookButton from "../../components/Button/AltLogInButton/FacebookButton/FacebookButton";
import LogGoogleButton from "../../components/Button/AltLogInButton/GoogleButton/GoogleButton";
import './LogIn.css'

const FormField = ({ label, inputId, placeholder }) => (
  <div className="form-control">
    <label htmlFor={inputId}>{label}</label>
    <input type="text" id={inputId} placeholder={placeholder} />
  </div>
);

function LogIn() {
  return (
    <>
      <div className="container">
        <section className="section">
          <div className="content-wrapper">
            <article className="main-content">
              <form className="form">
                <FormField
                  label="Nombre de usuario"
                  inputId="username"
                  placeholder="Nombre de usuario"
                />
                <FormField
                  label="Contraseña"
                  inputId="password"
                  placeholder="Contraseña"
                />
                <div className="social-buttons">
                  <LogGoogleButton/>
                  <LogFacebookButton/>
                  <LogAppleButton/>

                </div>
                <button type="submit" className="login-button">
                  Inicia sesión
                </button>
              </form>
              <p className="forgot-password">
                ¿Has olvidado tu contraseña? Haz click{" "}
                <span className="link">aquí</span>
              </p>
              <div className="register-section">
                <span className="register-text">¿NO ESTÁS REGISTRADO?</span>
                <button className="register-button">Regístrate</button>
              </div>
            </article>
            <aside className="side-content">
              <div className="side-text-wrapper">
                <h2 className="side-heading">
                  Haz <span className="highlight">match</span> con tu siguente{" "}
                  <span className="highlight">travel</span>
                </h2>
                <p className="side-text">
                  Inicia sesión y revisa tus últimos destinos
                </p>
              </div>
            </aside>
          </div>
        </section>
      </div>
    </>
  );
}

export default LogIn