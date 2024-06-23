import React, { useState } from 'react';
import './Quizz.css'

import ButtonIcon from '../../components/Button/ButtonIcon/ButtonIcon'
import DefaultCard from '../../components/Cards/DefaultCard/DefaultCard'

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
              <DefaultCard text='Solo' className='h-card' 
              onClick={() => { handleChange('travelers', 'Solo'); handleNextScreen(); }}
              />

              <DefaultCard text='En familia'  className='h-card' 
              onClick={() => { handleChange('travelers', 'Familia'); handleNextScreen(); }}
              />

              <DefaultCard text='En pareja' className='h-card' 
              onClick={() => { handleChange('travelers', 'Pareja'); handleNextScreen(); }}
              />

              <DefaultCard text='En grupo' className='h-card' 
              onClick={() => { handleChange('travelers', 'Grupo'); handleNextScreen(); }}
              />
            </div>
          </div>
        )}

        {currentScreen === 1 && (
          <div className='content'>
            <h1>¿Qué tipo de experiencia buscas?</h1>
            <div className='card-selection'>
              <DefaultCard text='Cultura' className='h-card' 
              onClick={() => { handleChange('experience', 'Cultura'); handleNextScreen(); }}
              />

              <DefaultCard text='Relax' className='h-card' 
              onClick={() => { handleChange('experience', 'Relax'); handleNextScreen(); }}
              />

              <DefaultCard text='Lugares icónicos' className='h-card' 
              onClick={() => { handleChange('experience', 'Iconos'); handleNextScreen(); }}
              />

              <DefaultCard text='Aventura' className='h-card' 
              onClick={() => { handleChange('experience', 'Aventura'); handleNextScreen(); }}
              />

              <DefaultCard text='Fiesta' className='h-card' 
              onClick={() => { handleChange('experience', 'Fiesta'); handleNextScreen(); }}
              />

              <DefaultCard text='Turismo' className='h-card' 
              onClick={() => { handleChange('experience', 'Turismo'); handleNextScreen(); }}
              />
            </div>
            </div>
        )}

        {currentScreen === 2 && (
          <div className='content'>
            <h1>¿En qué lugar quieres estar?</h1>
            <div className='card-selection'>
              <DefaultCard text='Playa' className='h-card' 
              onClick={() => { handleChange('location', 'Playa'); handleNextScreen(); }}
              />

              <DefaultCard text='Ciudad' className='h-card' 
              onClick={() => { handleChange('location', 'Ciudad'); handleNextScreen(); }}
              />

              <DefaultCard text='Montaña' className='h-card' 
              onClick={() => { handleChange('location', 'Montaña'); handleNextScreen(); }}
              />

              <DefaultCard text='Interior' className='h-card' 
              onClick={() => { handleChange('location', 'Interior'); handleNextScreen(); }}
              />
            </div>
          </div>
        )}

        {currentScreen === 3 && (
          <div className='content'>
            <h1>¿Qué clima prefieres?</h1>
            <div className='card-selection'>
              <DefaultCard text='Soleado' className='h-card' 
              onClick={() => { handleChange('weather', 'Soleado'); handleNextScreen(); }}
              />

              <DefaultCard text='Neutro' className='h-card' 
              onClick={() => { handleChange('weather', 'Neutro'); handleNextScreen(); }}
              />
              
              <DefaultCard text='Frío' className='h-card' 
              onClick={() => { handleChange('weather', 'Frío'); handleNextScreen(); }}
              />
            </div>
          </div>
        )}

        {currentScreen === 4 && (
          <div className='content'>
            <h1>Por último, ¿tienes algún continente de preferencia?</h1>
            <div className='card-selection'>
              <DefaultCard text='Europa' className='h-card' 
              onClick={() => { handleChange('continent', 'Europa'); handleSubmit(); }}
              />

              <DefaultCard text='Asia' className='h-card' 
              onClick={() => { handleChange('continent', 'Asia'); handleSubmit(); }}
              />

              <DefaultCard text='África' className='h-card' 
              onClick={() => { handleChange('continent', 'África'); handleSubmit(); }}
              />

              <DefaultCard text='América' className='h-card' 
              onClick={() => { handleChange('continent', 'América'); handleSubmit(); }}
              />

              <DefaultCard text='Oceanía' className='h-card' 
              onClick={() => { handleChange('continent', 'Oceanía'); handleSubmit(); }}
              />
            </div>
          </div>
        )}
      </form>
          
      {/* Aquí podrái ir una barra de progreso, si deira tiempo */}  
    </div>
  );
};

export default Quizz;
