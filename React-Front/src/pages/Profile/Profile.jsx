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

/* const TagGroup = ({ tags }) => (
  <div className="tag-group">
    {tags.map((tag, index) => (
      <Tag key={index} text={tag} />
    ))}
  </div>
);  */
 
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
        <p >{destination.QdestinationName}</p>
        </React.Fragment>
      })}
          </section>
      </main>
  )
} 

/* async function Profile() {
   try {
    const destinations = await getThreeDestinations();
    console.log(destinations+" prpprprprprpr")

    return destinations;
  } catch (error) {
    console.log("WEEEEEEEEEEEE")

    console.error('Error al obtener datos:', error);

  }
 
  return (
    <main className="profile-container">
        <aside>
          <ProfileCard/>
        </aside>

        <main className='preferences'>
          <section className="preferences-section">
            <h2>Mis preferencias</h2>
            <TagGroup/>
          </section>

          <section className="result-section">
            <h2>Mis últimos cuestionarios</h2>
             <div className="destinations-cards">
              {destinations.map((dest, index) => (
                <DestinationCard key={index} {...dest} />
              ))}
            </div>
          </section>
        </main>
      </main>
  )
} */

   //const [destinationsData, setDestinationsData] = useState([])
/*    const getResults = async () => {
     try {
    const destinations = await getAllQuizz()
  
      console.log("ÑEEEEEEEEEEÑEÑEÑÑE");
      console.log(destinations)
     // setDestinationsData(destinations)
      return destinations.map((destination) => {
        return <>
        <p>{destination.QdestinationName}</p>
        </>
      });
    } catch (error) {
      console.log("WEEEEEEEEEEEE")getResults
    }
   } */

   /*  <main className="profile-container">
        <section className="form-section">
        <aside >
        </aside>
        </section>
        <section className="result-section">
          <h2>Mis últimos cuestionarios</h2>
         
             
          </section>
      </main> */


export default Profile;