import React, { useState } from 'react';
import button from '../../components/buttons/Defaultbutton/Defaultbutton'

const Quizz = ({ destinationSearch }) => {
    // Contenemos los resultados del quizz para poder consultar la DB
  const [formData, setFormData] = useState({
    travelers: '',
    type: '',
    weather: '',
    place: '',
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
    e.preventDefault();
    destinationSearch(formData);
    // Aquí puedes agregar la lógica para comparar `formData` con el JSON externo
    const result = JSONcomparison(formData);
    console.log(result);
  };

  // Función para comparar `formData` con los destinos del JSON externo
  const JSONcomparison = (formData) => {
    return destinos.filter(destino => 
      destino.travelers === formData.travelers &&
      destino.type === formData.type &&
      destino.weather === formData.weather &&
      destino.place === formData.place &&
      destino.continent === formData.continent
    );
  };



  return (
    <>
    <form onSubmit={handleSubmit}>
      {currentScreen === 0 && (
        <div className='question1'>
          <h1>Primero, ¿con quién vas a viajar?</h1>
          <button onClick={() => { handleChange('travelers', 'solo'); handleNextScreen(); }}>Solo</button>
          <button onClick={() => { handleChange('travelers', 'familia'); handleNextScreen(); }}>En familia</button>
          <button onClick={() => { handleChange('travelers', 'pareja'); handleNextScreen(); }}>En pareja</button>
          <button onClick={() => { handleChange('travelers', 'grupo'); handleNextScreen(); }}>Grupo</button>
        </div>
      )}

      {currentScreen === 1 && (
        <div className='question2'>
          <h1>¿Qué tipo de experiencia buscas?</h1>
          <button onClick={() => { handleChange('type', 'cultura'); handleNextScreen(); }}>Cultura</button>
          <button onClick={() => { handleChange('type', 'relax'); handleNextScreen(); }}>Relax</button>
          <button onClick={() => { handleChange('type', 'iconos'); handleNextScreen(); }}>Lugares icónicos</button>
          <button onClick={() => { handleChange('type', 'aventura'); handleNextScreen(); }}>Aventura</button>
          <button onClick={() => { handleChange('type', 'fiesta'); handleNextScreen(); }}>Fiesta</button>
          <button onClick={() => { handleChange('type', 'turismo'); handleNextScreen(); }}>Turismo</button>
        </div>
      )}

      {currentScreen === 2 && (
        <div className='question3'>
          <h1>¿En qué lugar quieres estar?</h1>
          <button onClick={() => { handleChange('place', 'playa'); handleNextScreen(); }}>Playa</button>
          <button onClick={() => { handleChange('place', 'ciudad'); handleNextScreen(); }}>Ciudad</button>
          <button onClick={() => { handleChange('place', 'montana'); handleNextScreen(); }}>Montaña</button>
          <button onClick={() => { handleChange('place', 'interior'); handleNextScreen(); }}>Interior</button>
        </div>
      )}

      {currentScreen === 3 && (
        <div className='question4'>
          <h1>¿Qué clima prefieres?</h1>
          <button onClick={() => { handleChange('weather', 'soleado'); handleNextScreen(); }}>Soleado</button>
          <button onClick={() => { handleChange('weather', 'frio'); handleNextScreen(); }}>Frío</button>
          <button onClick={() => { handleChange('weather', 'neutro'); handleNextScreen(); }}>Neutral</button>
        </div>
      )}

      {currentScreen === 4 && (
        <div className='question5'>
          <h1>Por último, ¿tienes algún continente de preferencia?</h1>
          <button onClick={() => { handleChange('continent', 'Europa'); handleSubmit(); }}>Europa</button>
          <button onClick={() => { handleChange('continent', 'Asia'); handleSubmit(); }}>Asia</button>
          <button onClick={() => { handleChange('continent', 'Africa'); handleSubmit(); }}>África</button>
          <button onClick={() => { handleChange('continent', 'America'); handleSubmit(); }}>América</button>
          <button onClick={() => { handleChange('continent', 'Oceania'); handleSubmit(); }}>Oceanía</button>
        </div>
      )}
    </form>
        
    {/* Aquí podrái ir una barra de progreso, si deira tiempo */}  
    </>
  );
};

export default Quizz;
