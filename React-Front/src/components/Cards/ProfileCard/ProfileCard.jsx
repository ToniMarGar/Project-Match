import * as React from "react";
import './ProfileCard.css'

// Función paera la parte superior de la card
const UserProfileHeader = ({ imageSrc, name, username, /*plan*/ }) => (
  <header>
    <img src={imageSrc} alt="User picture"/>
    <div className="user-info">
      <h2>{name}</h2>
      <p>@{username}</p>
    </div>
    {/*<div className="user-plan">{plan}</div>*/}
  </header>
);

// Placeholder de los datos generales del user
const UserDetailField = ({ label, value }) => (
  <div className="user-detail-field">
    <span className="field-label">{label}:</span> {value}
  </div>
);

// Sección de revisión y cambio de contraseña
const PasswordSection = () => (
  <section>
    <h4>Contraseña</h4>
    <div className="password-buttons">
        {/*Generar botones alternativos*/}
      <button className="change-button">Cambiar</button> 
      <button className="review-button">Revisar</button>
    </div>
  </section>
);

// Card final
function UserProfileCard({ username, name, surname, email }) {
  return (
    <>
      <main>

        <UserProfileHeader
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1a735eb5b0bd101b39d17228cb94286b4acede094a638373f1333c4df7d3fe4c?apiKey=d0e5275347df4fb3abc0d1041ed2568c&"
          name={name} // Aquí hay que cambiarlo uan vez tengamos el usuario creado, destructuring
          username={username}
          {/*plan={plan}*/}
        />

        <hr/>

        <section className="user-details">
          <UserDetailField label="Nombre" value={name} />
          <UserDetailField label="Apellido" value={surname} />
          <UserDetailField label="Correo electrónico" value={email} />
        </section>

        <PasswordSection />

      </main>

    </>
  );
}

export default UserProfileCard;