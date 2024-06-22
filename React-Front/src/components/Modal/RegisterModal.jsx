import * as React from "react";
import './RegisterModal.css'

import ButtonIcon from '../Button/ButtonIcon/ButtonIcon'

const RegisterModal = () => {
  return (
    <>
      <section className="modal-container">
        <div className="modal-wrapper">
          <h2> ¿Quieres conocer tu destino ideal? Regístrate para descubrirlo </h2>
          <ButtonIcon/>
        </div>
      </section>
    </>
  );
};

export default RegisterModal;