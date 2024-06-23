import React, { useState } from 'react';
import { suggestedDestinations } from '../../services/quizzServices';



// La llamada al Back para revisar la información es destinationSearch


// 

const Quizz = () => {

  async function prueba() {
    await suggestedDestinations({ 
      "travelers": 6, 
      "weather": "Templado", 
      "location": "Ciudad", 
      "continent": "Europa", 
      "experience": "Cultura"
      }) 
  }




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
      //const result = JSONcomparison(formData);

     // console.log(result);

      const resultt = prueba().then(data => {
        // Convertir el objeto data a una cadena de texto
        const jsonString = JSON.stringify(data);
        console.log('Datos como cadena:', jsonString.toString);

        // Aquí puedes usar jsonString según tus necesidades
    })
    .catch(error => {
        console.error('Error al obtener datos:', error);
    });

   

      //console.log(resultt.resolve + " todoOKEY")
  };
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
    <>
    <form onSubmit={handleSubmit}>
      {currentScreen === 0 && ( 
        <div className='question1'>
          <h1>Primero, ¿con quién vas a viajar?</h1>
          <div className='container1'>
            {/* Para cada click, se ejecuta un cambio de pantalla y cambia el valor de la variable formData por el input seleccionado*/}
            <button onClick={() => { handleChange('travelers', 'solo'); handleNextScreen(); }}>Solo</button>
            <button onClick={() => { handleChange('travelers', 'familia'); handleNextScreen(); }}>En familia</button>
            <button onClick={() => { handleChange('travelers', 'pareja'); handleNextScreen(); }}>En pareja</button>
            <button onClick={() => { handleChange('travelers', 'grupo'); handleNextScreen(); }}>Grupo</button>
          </div>
        </div>
      )}

      {currentScreen === 1 && (
        <div className='question2'>
          <h1>¿Qué tipo de experiencia buscas?</h1>
          <button onClick={() => { handleChange('experience', 'cultura'); handleNextScreen(); }}>Cultura</button>
          <button onClick={() => { handleChange('experience', 'relax'); handleNextScreen(); }}>Relax</button>
          <button onClick={() => { handleChange('experience', 'iconos'); handleNextScreen(); }}>Lugares icónicos</button>
          <button onClick={() => { handleChange('experience', 'aventura'); handleNextScreen(); }}>Aventura</button>
          <button onClick={() => { handleChange('experience', 'fiesta'); handleNextScreen(); }}>Fiesta</button>
          <button onClick={() => { handleChange('experience', 'turismo'); handleNextScreen(); }}>Turismo</button>
        </div>
      )}

      {currentScreen === 2 && (
        <div className='question3'>
          <h1>¿En qué lugar quieres estar?</h1>
          <button onClick={() => { handleChange('location', 'playa'); handleNextScreen(); }}>Playa</button>
          <button onClick={() => { handleChange('location', 'ciudad'); handleNextScreen(); }}>Ciudad</button>
          <button onClick={() => { handleChange('location', 'montana'); handleNextScreen(); }}>Montaña</button>
          <button onClick={() => { handleChange('location', 'interior'); handleNextScreen(); }}>Interior</button>
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
