import * as React from "react";
import './ButtonProfile.css'

function ButtonProfile() {
  return (
    <>
      <div className="button">
        <p text='Hola, {user.name}'></p>
        <img src="#" alt="Profile image" />
      </div>
    </>
  );
}

export default ButtonProfile