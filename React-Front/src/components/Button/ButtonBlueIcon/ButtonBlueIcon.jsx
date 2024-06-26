import * as React from "react";
import sky from '../../../assets/other-icons/skyscanner-logo.png'

function ButtonBlue() {
  return (
    <button className="sky-button">
        <span className="button-text">Reserva en Skyscanner</span>
        <img
          loading="lazy"
          src={sky}
          alt="Skyscanner logo"
          className="sky-icon"
        />
    </button>
  );
}

export default ButtonBlue;