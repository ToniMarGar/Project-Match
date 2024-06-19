import * as React from "react";
import ButtonMain from '../../components/Button/ButtonMain/ButtonMain'
import ButtonSecondary from '../../components/Button/ButtonSecondary/ButtonSecondary'
import LogAppleButton from "../../components/Button/AltLogInButton/AppleButton/AppleButton";
import LogFacebookButton from "../../components/Button/AltLogInButton/FacebookButton/FacebookButton";
import LogGoogleButton from "../../components/Button/AltLogInButton/GoogleButton/GoogleButton";

function LogIn() {
  return (
    <>
      <main>
        <section className="login-section">

          <div className="login-form-container">

            <form className="login-form">

              <label htmlFor="username">
                Nombre de usuario
              </label>
              <input
                type="text"
                id="username"
                className="form-input"
                placeholder="Nombre de usuario"
              />

              <label htmlFor="password">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="Contraseña"
              />

              <div className="social-login">
                <LogAppleButton/>
                <LogFacebookButton/>
                <LogGoogleButton/>
              </div>

              <ButtonMain>Inicia sesión</ButtonMain>
              <p>
                ¿Has olvidado tu contraseña? Haz click{" "}
                <span className="link">aquí</span>
                {/*Colocar un link random a la page de recuperación*/}
              </p>
            </form>

            <div className="register-prompt">
              <p>¿NO ESTÁS REGISTRADO?</p>
              <ButtonSecondary>Regístrate</ButtonSecondary>
            </div>

          </div>
        </section>

        <section className="promotion-section">
          <h2>Haz <strong>match</strong> con tu siguiente <strong>travel</strong></h2>
          <p>Inicia sesión y revisa tus últimos destinos</p>
        </section>

      </main>
    </>
  );
}

export default LogIn