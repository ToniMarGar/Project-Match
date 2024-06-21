import React, { useState } from 'react';
import { setOneResult } from '../../services/result';
import { setOneDestination } from '../../services/destinationServices';
//const cityDB = require('../../../../Api-Back/database/cities.json');
import {sortedDestinos} from '../../../../Api-Back/api/controllers/quizzCalculator.controller';

// La llamada al Back para revisar la información es destinationSearch
// 

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

  // Agregar una variable para amacenar el Quizz hasta elegir el resultado
  const [quizzResult, setQuizzResult] = useState(null);

  // Estado para manejar la pantalla actual del cuestionario
  const [currentScreen, setCurrentScreen] = useState(0);
  const [dataResult, setDataResult] = useState()

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
   const handleSubmit = async(e) => {
     if (e) {
      console.log(e)
      e.preventDefault();
      
      // Aquí puedes agregar la lógica para comparar `formData` con el JSON externo
      //const result = JSONcomparison(formData);
      //console.log(result);

      // ===================================
      //if (result.length > 0) {
        
        // Guardar el resultado en el estado intermedio
        setQuizzResult(formData);
  
        // Mandar el resultado a la tabla Result

           // Reemplazar con el ID del usuario real
          // Reemplazar con el ID del Quizz real
          console.log(cityDB)
        console.log(formData)
         
         // IMPORTANTE
        const obj = {idUsername: 1, idQuizz: 1, idDestination: "hello"}

        // AQUI VAN LOS DESTINOS A LA BD
        const dest = {destinationName: "París", travelers: parseInt(formData.travelers), experience: formData.experience, weather: formData.weather ,location: formData.location, continent: formData.continent}
        // Asociar Result a Profile
        associateResultToProfile({
          userId: 1, // Reemplazar con el ID del usuario real
          resultId: 1 // Reemplazar con el ID del resultado guardado real
        });
      //}
      //CREAMOS UN OBJETO SOLO PARA PASAR POR PARAMETRO Y ACCEDEMOS A CADA CAMPO DEL OBJETO
      //en data result metemos todo
      console.log(sortedDestinos)

        await setOneResult(obj)
        console.log(dest)

        await setOneDestination(dest)
      
      console.log("dkdkdkdkd")
    }
  };

  // ========= Implementacion de la funion para asociar el resultado al perfil del ususario =========
  const saveResultToDB = async (resultData) => {
    console.log(resultData)
    // Aquí iría la lógica para guardar el resultado en la base de datos
    // Esto puede ser una llamada a una API, por ejemplo:
    
  };

  // ========= Implementar la funcion para asociar el resultado al perfil de ususario =========
  const associateResultToProfile = (associationData) => {

  };



  return (
    <>
    {quizzResult ? (
      <div className="result">
        <h1>Resultado del Quizz</h1>
        <p>Tu destino recomendado es: {quizzResult.name}</p>
      </div>
    ) : (
      <form onSubmit={handleSubmit}>
        {currentScreen === 0 && ( 
          <div className='question1'>
            <h1>Primero, ¿con quién vas a viajar?</h1>
            <div className='container1'>
              <button onClick={() => { handleChange('travelers', '1'); handleNextScreen(); }}>Solo</button>
              <button onClick={() => { handleChange('travelers', '4'); handleNextScreen(); }}>En familia</button>
              <button onClick={() => { handleChange('travelers', '2'); handleNextScreen(); }}>En pareja</button>
              <button onClick={() => { handleChange('travelers', '4'); handleNextScreen(); }}>Grupo</button>
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
            <button onClick={() => { handleChange('weather', 'templado'); handleNextScreen(); }}>Neutral</button>
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
    )}
    </>
  );
};

export default Quizz;
