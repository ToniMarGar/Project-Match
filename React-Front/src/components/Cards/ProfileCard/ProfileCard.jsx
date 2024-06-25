import * as React from "react";
import './ProfileCard.css'
import ButtonThird from '../../Button/ButtonThird/ButtonThird'
import { readUsername } from "../../../services/profile.service";
import { getOneUser } from "../../../services/user";
import { useEffect, useState } from "react";
function ProfileCard({username, firstName, surName, email, profileImg}) {
  const [data, setData] = useState({})
  useEffect(() => {
    getuserinfo()
  },[])
  async function getuserinfo () {
    const data = await getOneUser()
    console.log(data)
    console.log("uids");
    setData(data)
  }
  return (
    <>
      <article className="profile-card">

        <div className="profile-header">
          <img
            loading="lazy"
            /* src={profileImg} */
            src="../../../../src/assets/Default_profile.jpg"
            alt="Profile picture"
            className="profile-image"
          />
          <p className="profile-name">{data.firstname} {data.surname}</p>
          <p className="profile-username">{data.username}</p>
        </div>

        <hr/>

        <main className="profile-details">

          <label className="profile-title">Nombre: {data.firstname}</label>
          <label className="profile-title">Apellido: {data.surname}</label>
          <label className="profile-title">Email: {data.email}</label>
          
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
