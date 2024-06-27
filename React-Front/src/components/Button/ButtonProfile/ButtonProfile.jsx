import './ButtonProfile.css'
//import { getOneUser } from '../../../services/user';
//import React, { useEffect, useState } from 'react';




function ButtonProfile({username, userImg}) {

/*     const [data, setData] = useState({})

    async function getUsername() {
    const result = await getOneUser() 
    console.log("pepepepeep ",result);
    return result
  } */

/* useEffect(() => {
    async function fetchData() {
      try {
        const result = await getUsername();
        console.log("pepepepeep ", result);
        setData(result);
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    }

    fetchData();
  }, []); */


    

  return (
    <>
      <button className="profile-button">
        <p>Hola, usuari@</p>
        <img src="../../../../src/assets/Default_profile.jpg" alt="Profile image" width={"40px"}/>
      </button>
    </>
  );
}

export default ButtonProfile