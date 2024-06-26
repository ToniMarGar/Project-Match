import React, { useState } from 'react';
import { suggestedDestinations } from '../../services/quizzServices';
//import { LinearProgress } from '@mui/material';

import {setOneResult} from '../../services/result';


// La llamada al Back para revisar la información es destinationSearch


// 
import { Link } from "react-router-dom";
import './Quizz.css'

import ButtonIcon from '../../components/Button/ButtonIcon/ButtonIcon'
// import DefaultCard from '../../components/Cards/DefaultCard/DefaultCard';

const Quizz = () => {
console.log("HOLALALAL")

  async function prueba() {
    console.log(formData);
    const result = await suggestedDestinations({ 
      "travelers": formData.travelers, 
      "weather": formData.weather, 
      "location": formData.location, 
      "continent": formData.continent, 
      "experience": formData.experience
      }) 
      return result
  }


    // Contenemos los resultados del quizz para poder consultar la DB
    // Cada key cambia de valor con cada rDestinationespuesta del usuario
  const [formData, setFormData] = useState({
    travelers: '',
    experience: '',
    weather: '',
    location: '',
    continent: ''
  });

  // Estado para manejar la pantalla actual del cuestionario
  const [currentScreen, setCurrentScreen] = useState(0);

  const [destinations, setDestinations] = useState([]);


  //Manejar el 'cambio de pantallas' entre el cuestionario
  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
    console.log(name, value)
    console.log(formData)
  };

   // Manejar el cambio de pantalla del cuestionario
  const handleNextScreen = () => {
    setCurrentScreen(currentScreen + 1);
  };

   // Submit del formulario una vez acabado
   const handleSubmit = async (e) => {
    console.log(formData)
      e.preventDefault();
      
      // Aquí puedes agregar la lógica para comparar `formData` con el JSON externo
      //const result = JSONcomparison(formData);

     try{
      const result = await prueba();
      console.log(result)
      setDestinations(result)

      handleNextScreen()


     } catch(error) {
      console.error('Error al obtener datos:', error);
     }
      //console.log(resultt.resolve + " todoOKEY")
  
   }

 



  // Función para comparar formData con los destinos del JSON externo
  const JSONcomparison = (formData) => {
    return destinationName.filter(destinationName => 
      destinationName.travelers === formData.travelers &&
      destinationName.experience === formData.experience &&
      destinationName.weather === formData.weather &&
      destinationName.location === formData.location &&
      destinationName.continent === formData.continent
    );
  };



  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
      {/*
      {currentScreen === 0 && ( 
          <div id='intro-content'>
            <p id='quizz-intro'>¿Quieres una escapada y no sabes dónde ir?</p>
            <h1 className='blue'>Vamos a explorar tus preferencias para encontrar tu destino ideal</h1>
            <ButtonIcon onClick={() => { handleNextScreen(); }}/>
          </div>
        )}
        */}

        {currentScreen === 0 && ( 
          <div className='content'>
            <h1>Primero, ¿con quién vas a viajar?</h1>
            <div className='card-selection'>
              {/* Para cada click, se ejecuta un cambio de pantalla y cambia el valor de la variable formData por el input seleccionado*/}
              <button text='Solo' className='h-card' 
              onClick={() => { handleChange('travelers', 'solo'); handleNextScreen(); }}
              >Solo</button>

              <button text='En familia' className='h-card' 
              onClick={() => { handleChange('travelers', 'familia'); handleNextScreen(); }}
              >En familia</button>

              <button text='En pareja' className='h-card' 
              onClick={() => { handleChange('travelers', 'pareja'); handleNextScreen(); }}
              >En pareja</button>

              <button text='Grupo' className='h-card' 
              onClick={() => { handleChange('travelers', 'grupo'); handleNextScreen(); }}
              >Grupo</button>
            </div>
          </div>
        )}

        {currentScreen === 1 && (
          <div className='content'>
            <h1>¿Qué tipo de experiencia buscas?</h1>
            <div className='card-selection'>
              <button className='h-card' style={{backgroundImage: "url(/src/assets/quizz-card-images/cultura.jpg)", backgroundSize: "cover" }}
              
              onClick={() => { handleChange('experience', 'cultura'); handleNextScreen(); }}
              >Cultura</button>

              <button className='h-card' style={{backgroundImage: "url(/src/assets/quizz-card-images/relax.jpg)", backgroundSize: "cover" }}
              
              onClick={() => { handleChange('experience', 'relax'); handleNextScreen(); }}
              >Relax</button>

              <button className='h-card' sDestinationtyle={{backgroundImage: "url(/src/assets/quizz-card-images/iconos.jpg)", backgroundSize: "cover" }}
              
              onClick={() => { handleChange('experience', 'iconos'); handleNextScreen(); }}
              >Lugares icónicos</button>

              <button className='h-card' style={{backgroundImage: "url(/src/assets/quizz-card-images/aventura.jpg)", backgroundSize: "cover" }}
              
              onClick={() => { handleChange('experience', 'aventura'); handleNextScreen(); }}
              >Aventura</button>

              <button className='h-card' style={{backgroundImage: "url(/src/assets/quizz-card-images/fiesta.jpg)", backgroundSize: "cover" }}
              
              onClick={() => { handleChange('experience', 'fiesta'); handleNextScreen(); }}
              >Fiesta</button>

              <button className='h-card' style={{backgroundImage: "url(/src/assets/quizz-card-images/turismo.jpg)", backgroundSize: "cover" }}
              
              onClick={() => { handleChange('experience', 'turismo'); handleNextScreen(); }}
              >Turismo</button>
            </div>
            </div>
        )}

        {currentScreen === 2 && (
          <div className='content'>
            <h1>¿En qué lugar quieres estar?</h1>
            <div className='card-selection'>
              <button className='h-card' style={{backgroundImage: "url(/src/assets/quizz-card-images/playa.jpg)", backgroundSize: "cover" }}
              
              onClick={() => { handleChange('location', 'playa'); handleNextScreen(); }}
              >Playa</button>

              <button className='h-card' style={{backgroundImage: "url(/src/assets/quizz-card-images/ciudad.jpg)", backgroundSize: "cover" }}
              
              onClick={() => { handleChange('location', 'ciudad'); handleNextScreen(); }}
              >Ciudad</button>

              <button className='h-card' sDestinationtyle={{backgroundImage: "url(/src/assets/quizz-card-images/montana.jpg)", backgroundSize: "cover" }}
              
              onClick={() => { handleChange('location', 'montana'); handleNextScreen(); }}
              >Montaña</button>

              <button className='h-card' style={{backgroundImage: "url(/src/assets/quizz-card-images/interior.jpg)", backgroundSize: "cover" }}
              
              onClick={() => { handleChange('location', 'interior'); handleNextScreen(); }}
              >Interior</button>
            </div>
          </div>
        )}

        {currentScreen === 3 && (
          <div className='content'>
            <h1>¿Qué clima prefieres?</h1>
            <div className='card-selection'>
              <button className='v-card' style={{backgroundImage: "url(/src/assets/quizz-card-images/soleado.jpg)", backgroundSize: "cover" }}
              
              onClick={() => { handleChange('weather', 'soleado'); handleNextScreen(); }}
              >Soleado</button>
              
              <button className='v-card' style={{backgroundImage: "url(/src/assets/quizz-card-images/frio.jpg)", backgroundSize: "cover" }}
              
              onClick={() => { handleChange('weather', 'frio'); handleNextScreen(); }}
              >Frío</button>

              <button className='v-card' style={{backgroundImage: "url(/src/assets/quizz-card-images/neutro.jpg)", backgroundSize: "cover" }}
              
              onClick={() => { handleChange('weather', 'neutro'); handleNextScreen(); }}
              >Neutral</button>
            </div>
          </div>
        )}

        {currentScreen === 4 && (
          <div className='content'>
            <h1>Por último, ¿tienes algún continente de preferencia?</h1>
            <div className='card-selection'>
              <Link to='/Destination'>
                <button className='h-card' 
                onClick={() => { handleChange('continent', 'Europa'); handleSubmit(); }}
                >Europa</button>
              </Link>

              <Link to='/Destination'>
                <button className='h-card' 
                onClick={() => { handleChange('continent', 'Asia'); handleSubmit(); }}
                >Asia</button>
              </Link>

              <Link to='/Destination'>
                <button className='h-card' 
                onClick={() => { handleChange('continent', 'Africa'); handleSubmit(); }}
                >África</button>
              </Link>

              <Link to='/Destination'>
                <button className='h-card' 
                onClick={() => { handleChange('continent', 'America'); handleSubmit(); }}
                >América</button>
              </Link>

             {/*  <Link to='/Destination'> */}
                <button className='h-card'
                onClick={() => { handleChange('continent', 'Oceania'); handleSubmit(); }}
                >Oceanía</button>
              {/* </Link> */}
            </div>
          </div>
        )}
        {currentScreen === 5 && (
          <div className='destinatios'>
          {destinations.map((d, idx)=>{
            return <h1 key={idx}>{d.destination.destinationName}</h1>
          })}
          </div>
        )}
      </form>
          
      {/* Aquí podrái ir una barra de progreso, si deira tiempo */}  
    </div>
  );
};

export default Quizz;
