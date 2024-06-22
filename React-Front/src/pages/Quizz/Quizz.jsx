import React, { useState } from 'react';
import './Quizz.css'

import ButtonIcon from ''

const Quizz = () => {
    // Contenemos los resultados del quizz para poder consultar la DB
    // Cada key cambia de valor con cada respuesta del usuario
  const [formData, setFormData] = useState({
    travelers: '',
    experience: '',
    weather: '',
    location: '',
    continent: ''
  });

  // Estado para manejar la pantalla actual del cuestionario
  const [currentScreen, setCurrentScreen] = useState(0);

  //Manejar el 'cambio de pantallas' entre el cuestionario
  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

   // Manejar el cambio de pantalla del cuestionario
  const handleNextScreen = () => {
    setCurrentScreen(currentScreen + 1);
  };

   // Submit del formulario una vez acabado
   const handleSubmit = (e) => {
     if (e) {
      console.log(e)
      e.preventDefault();
      
      // Aquí puedes agregar la lógica para comparar `formData` con el JSON externo
      const result = JSONcomparison(formData);
      console.log(result);
    }
  };



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
      {currentScreen === 0 && ( 
          <div id='intro-content'>
            <p id='quizz-intro'>¿Quieres una escapada y no sabes dónde ir?</p>
            <h1 className='blue'>Vamos a explorar tus preferencias para encontrar tu destino ideal</h1>
            <button onClick={() => { handleNextScreen(); }}>Descúbre</button>
          </div>
        )}

        {currentScreen === 1 && ( 
          <div className='content'>
            <h1>Primero, ¿con quién vas a viajar?</h1>
            <div className='card-selection'>
              {/* Para cada click, se ejecuta un cambio de pantalla y cambia el valor de la variable formData por el input seleccionado*/}
              <button className='h-card' 
              onClick={() => { handleChange('travelers', 'solo'); handleNextScreen(); }}
              >Solo</button>

              <button className='h-card' 
              onClick={() => { handleChange('travelers', 'familia'); handleNextScreen(); }}
              >En familia</button>

              <button className='h-card' 
              onClick={() => { handleChange('travelers', 'pareja'); handleNextScreen(); }}
              >En pareja</button>

              <button className='h-card' 
              onClick={() => { handleChange('travelers', 'grupo'); handleNextScreen(); }}
              >Grupo</button>
            </div>
          </div>
        )}

        {currentScreen === 2 && (
          <div className='content'>
            <h1>¿Qué tipo de experiencia buscas?</h1>
            <div className='card-selection'>
              <button className='h-card' 
              onClick={() => { handleChange('experience', 'cultura'); handleNextScreen(); }}
              >Cultura</button>

              <button className='h-card' 
              onClick={() => { handleChange('experience', 'relax'); handleNextScreen(); }}
              >Relax</button>

              <button className='h-card' 
              onClick={() => { handleChange('experience', 'iconos'); handleNextScreen(); }}
              >Lugares icónicos</button>

              <button className='h-card' 
              onClick={() => { handleChange('experience', 'aventura'); handleNextScreen(); }}
              >Aventura</button>

              <button className='h-card' 
              onClick={() => { handleChange('experience', 'fiesta'); handleNextScreen(); }}
              >Fiesta</button>

              <button className='h-card' 
              onClick={() => { handleChange('experience', 'turismo'); handleNextScreen(); }}
              >Turismo</button>
            </div>
            </div>
        )}

        {currentScreen === 3 && (
          <div className='content'>
            <h1>¿En qué lugar quieres estar?</h1>
            <div className='card-selection'>
              <button className='h-card' 
              onClick={() => { handleChange('location', 'playa'); handleNextScreen(); }}
              >Playa</button>

              <button className='h-card' 
              onClick={() => { handleChange('location', 'ciudad'); handleNextScreen(); }}
              >Ciudad</button>

              <button className='h-card' 
              onClick={() => { handleChange('location', 'montana'); handleNextScreen(); }}
              >Montaña</button>

              <button className='h-card' 
              onClick={() => { handleChange('location', 'interior'); handleNextScreen(); }}
              >Interior</button>
            </div>
          </div>
        )}

        {currentScreen === 4 && (
          <div className='content'>
            <h1>¿Qué clima prefieres?</h1>
            <div className='card-selection'>
              <button className='v-card' 
              onClick={() => { handleChange('weather', 'soleado'); handleNextScreen(); }}
              >Soleado</button>
              
              <button className='v-card' 
              onClick={() => { handleChange('weather', 'frio'); handleNextScreen(); }}
              >Frío</button>

              <button className='v-card' 
              onClick={() => { handleChange('weather', 'neutro'); handleNextScreen(); }}
              >Neutral</button>
            </div>
          </div>
        )}

        {currentScreen === 5 && (
          <div className='content'>
            <h1>Por último, ¿tienes algún continente de preferencia?</h1>
            <div className='card-selection'>
              <button className='h-card' 
              onClick={() => { handleChange('continent', 'Europa'); handleSubmit(); }}
              >Europa</button>

              <button className='h-card' 
              onClick={() => { handleChange('continent', 'Asia'); handleSubmit(); }}
              >Asia</button>

              <button className='h-card' 
              onClick={() => { handleChange('continent', 'Africa'); handleSubmit(); }}
              >África</button>

              <button className='h-card' 
              onClick={() => { handleChange('continent', 'America'); handleSubmit(); }}
              >América</button>

              <button className='h-card' background-image=''
              onClick={() => { handleChange('continent', 'Oceania'); handleSubmit(); }}
              >Oceanía</button>
            </div>
          </div>
        )}
      </form>
          
      {/* Aquí podrái ir una barra de progreso, si deira tiempo */}  
    </div>
  );
};

export default Quizz;
