import * as React from "react";
import './ProfileCard.css'
import { Link, useNavigate } from "react-router-dom"; 
import toast, { Toaster } from 'react-hot-toast';
import ButtonThird from '../../Button/ButtonThird/ButtonThird'
import { readUsername } from "../../../services/profile.service";
import { getOneUser } from "../../../services/user";
import { useEffect, useState } from "react";
function ProfileCard({username, firstName, surName, email, profileImg}) {
  const [data, setData] = useState({})
  const navigate = useNavigate();

const cerrarSesion = () => {
     localStorage.removeItem("token");
     localStorage.removeItem("role");
     localStorage.removeItem("userEmail");
     navigate("/LogIn")
  };

  useEffect(() => {
    getuserinfo()
  },[])

  async function getuserinfo () {
    const data = await getOneUser()
    console.log(data)
    setData(data)
    toast.success('Bienvenido de nuevo!')

  }
  return (
    <>
      <article className="profile-card">
      <Toaster />
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
            <label className="profile-title"></label>
            <ButtonThird text="Cambiar contraseña"/>
          </section>
          <section>
            <button onClick={cerrarSesion} className="button-close">Cerrar sesion</button>
          </section>
        </main>
      </article>
    </>
  );
}

export default ProfileCard;
