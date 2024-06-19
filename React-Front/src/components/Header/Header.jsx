import * as React from "react";
import ButtonMain from "../Button/ButtonMain/ButtonMain";
import ButtonSecondary from "../Button/ButtonSecondary/ButtonSecondary";
import NavLink from "../Link/Link";


function Header() {
  return (
    <>
      <header>
            <div href="#" className="logo"/>

            <nav className="navigation">
                <NavLink><a href="#">Home</a></NavLink>
                <NavLink><a href="#">Cuestionario</a></NavLink>
                <NavLink><a href="#">Hazte premium</a></NavLink>
            </nav>

        <div className="auth-actions">
          <ButtonMain>Inicia sesión</ButtonMain>
          <ButtonSecondary/>Regístrate<ButtonSecondary/>
        </div>

      </header>
    </>
  );
}
export default Header;