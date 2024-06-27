 import * as React from "react";
// import React, { useState } from 'react';

import './Profile.css'
import { getAllDestinations } from '../../services/destinationServices'

import ProfileCard from '../../components/Cards/ProfileCard/ProfileCard'
import DestinationCard from '../../components/Cards/DestinationCard/DestinationCard'
import Tag from '../../components/Tags/Tag/Tag'

  async function getThreeDestinations(){
  const result = await getAllDestinations()
  console.log(result)
  console.log("eufisbf");
  return result
} 

 
 const Profile = () => {
 
  return (

    <main className="profile-container">
        <section className="form-section">
        <aside >
          <ProfileCard/> 
        </aside>
        </section>
        <section className="result-section">
          <h2>Mis últimos cuestionarios</h2>
             
          </section>
      </main>
  )
}

export default Profile;
