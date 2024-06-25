import * as React from "react";
import './ProfileCard.css'
import ButtonThird from '../../Button/ButtonThird/ButtonThird'

function ProfileCard({username, firstName, surName, email, profileImg}) {
res.locals.user.id
  return (
    <>
      <article className="profile-card">

        <div className="profile-header">
          <img
            loading="lazy"
            src={profileImg}
            alt="Profile picture"
            className="profile-image"
          />
          <p className="profile-name">{firstName} {surName}</p>
          <p className="profile-username">{username}</p>
        </div>

        <hr/>

        <main className="profile-details">

          <label className="profile-title">Nombre: {firstName}</label>
          <label className="profile-title">Apellido: {surName}</label>
          <label className="profile-title">Email: {email}</label>
          
          <section className="button-group">
            <label className="profile-title">Contraseña</label>
            <ButtonThird text="Cambiar contraseña"/>
          </section>
        </main>
      </article>
    </>
  );
}

export default ProfileCard;
