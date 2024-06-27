import { getAllQuizz } from '../../services/profile.service';
import './Profile.css'
import { getAllDestinations } from '../../services/destinationServices'
import ProfileCard from '../../components/Cards/ProfileCard/ProfileCard'
import DestinationCard from '../../components/Cards/DestinationCard/DestinationCard'
import Tag from '../../components/Tags/Tag/Tag'
import React, { useEffect, useState } from 'react';
/* 
  async function getThreeDestinations(){
  const result = await getAllQuizz()
  console.log(result)
  console.log("eufisbf");
  return result
}  */

 
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
             {destinationsData?.map((destination) => {
        return <React.Fragment key={destination.id}>
        <p >{destination.QdestinationName}</p>
        </React.Fragment>
      })}
          </section>
      </main>
  )
} 

export default Profile;
