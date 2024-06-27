import { getAllQuizz } from '../../services/profile.service';
import './Profile.css'
import { getAllDestinations } from '../../services/destinationServices'
import ProfileCard from '../../components/Cards/ProfileCard/ProfileCard'
import DestinationCard from '../../components/Cards/DestinationCard/DestinationCard'
import Tag from '../../components/Tags/Tag/Tag'
import React, { useEffect, useState } from 'react';
 
 const Profile = () => {
   const [destinationsData, setDestinationsData] = useState([])

   useEffect(() => {
     const getResults = async () => {
          try {
       const destinations = await getAllQuizz();
       setDestinationsData(destinations)
       return destinations;
     } catch (error) {   
       console.error('Error al obtener datos:', error);
   
     }
    } 
     getResults()
   }, [])

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
        <DestinationCard text={destination.QdestinationName} ></DestinationCard>
        </React.Fragment>
      })}
          </section>
      </main>
  )
} 

export default Profile;