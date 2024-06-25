import * as React from "react";
import './ProfileCard.css'

function ProfileCard({username, firstName, surName, email/* , profilepic */}) {

  return (
    <>
      <div>
        <div>
          <img src="React-Front/public/Default_profile.jpg" alt="ProfilePicture" />
          <p>Bienvenido a tu zona personal {username}</p>
        </div>
        <hr/>
        <main >
          <label>Nombre: {firstName}</label>
          <label>Apellido: {surName}</label>
          <label>Email: {email}</label>
        </main>
      </div>
    </>
  );
}

export default ProfileCard;