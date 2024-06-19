import * as React from "react";
import ButtonMain from '../../components/Button/ButtonMain/ButtonMain'
import ButtonSecondary from '../../components/Button/ButtonSecondary/ButtonSecondary'

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
                <Icon
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/007bd5e93f1134b9a60d8b9f6c4ef17ab916ae6c1d110782ea254023c08b5a56?apiKey=d0e5275347df4fb3abc0d1041ed2568c&"
                  alt="Facebook Login"
                  className="social-icon"
                />
                <Icon
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/42555808cb1f7628e47d836d682fb301cc1cda72232f814cb423584e4f5eb083?apiKey=d0e5275347df4fb3abc0d1041ed2568c&"
                  alt="Google Login"
                  className="social-icon"
                />
                <Icon
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/361dcd216d7e9f7f94059a51536f39c72197b8ba2a533900a9ebe73ad76164be?apiKey=d0e5275347df4fb3abc0d1041ed2568c&"
                  alt="Twitter Login"
                  className="social-icon"
                />
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