import React, { useState } from 'react';
import { suggestedDestinations } from '../../services/quizzServices';
import { Link } from "react-router-dom";
import {setOneResult} from '../../services/result';
import './Quizz.css'

import Tag from '../../components/Tags/Tag/Tag'
import ButtonMain from '../../components/Button/ButtonMain/ButtonMain'
import ButtonSecondary from '../../components/Button/ButtonSecondary/ButtonSecondary'
import DestinacionCard from '../../components/Cards/DestinationCard/DestinationCard';


const Quizz = () => {

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

  // El final
  const [finalResult, setFinalResult] = useState("")
  console.log(finalResult)

   // Submit del formulario una vez acabado
   const handleSubmit = async (e) => {
    console.log(formData)
    // 
      e.preventDefault();

     try{
      const result = await prueba();
      console.log(result)
      setDestinations(result)

      handleNextScreen()


     } catch(error) {
      console.error('Error al obtener datos:', error);
     }  
   }

   const handleSelection = async (e) => {
    try{
      const result = await prueba2();
      handleNextScreen()

      //console.log(result)
      //setDestinations(result)
     } catch(error) {
      console.error('Error al obtener datos:', error);
     }  

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

        {currentScreen === 0 && ( 
          <div className='content'>
            <h1>Primero, ¿con quién vas a viajar?</h1>
            <div className='card-selection'>
              {/* Para cada click, se ejecuta un cambio de pantalla y cambia el valor de la variable formData por el input seleccionado*/}
              <button text='Solo' className='h-card' style={{backgroundImage: "url(/src/assets/quizz-card-images/solo.jpg)", backgroundSize: "cover", backgroundPosition: 'center' }}
                onClick={() => { handleChange('travelers', 'Solo'); handleNextScreen(); }}
              >Solo</button>

              <button text='En familia' className='h-card' style={{backgroundImage: "url(/src/assets/quizz-card-images/familia.jpg)", backgroundSize: "cover", backgroundPosition: 'center' }}
                onClick={() => { handleChange('travelers', 'Familia'); handleNextScreen(); }}
              >En familia</button>

              <button text='En pareja' className='h-card' style={{backgroundImage: "url(/src/assets/quizz-card-images/pareja.jpg)", backgroundSize: "cover", backgroundPosition: 'center' }}
                onClick={() => { handleChange('travelers', 'Pareja'); handleNextScreen(); }}
              >En pareja</button>

              <button text='Grupo' className='h-card' style={{backgroundImage: "url(/src/assets/quizz-card-images/grupos.jpg)", backgroundSize: "cover", backgroundPosition: 'center' }}
                onClick={() => { handleChange('travelers', 'Grupo'); handleNextScreen(); }}
              >Grupo</button>
            </div>
          </div>
        )}


        {currentScreen === 1 && (
          <div className='content'>
            <h1>¿Qué tipo de experiencia buscas?</h1>
            <div className='card-selection'>
              <button className='h-card' style={{backgroundImage: "url(/src/assets/quizz-card-images/cultura.jpg)", backgroundSize: "cover", backgroundPosition: 'center' }}
                onClick={() => { handleChange('experience', 'Cultura'); handleNextScreen(); }}
              >Cultura</button>

              <button className='h-card' style={{backgroundImage: "url(/src/assets/quizz-card-images/relax.jpg)", backgroundSize: "cover", backgroundPosition: 'center' }}
                onClick={() => { handleChange('experience', 'Relax'); handleNextScreen(); }}
              >Relax</button>

              <button className='h-card' sDestinationtyle={{backgroundImage: "url(/src/assets/quizz-card-images/iconos.jpg)", backgroundSize: "cover", backgroundPosition: 'center' }}
                onClick={() => { handleChange('experience', 'Iconos'); handleNextScreen(); }}
              >Lugares icónicos</button>

              <button className='h-card' style={{backgroundImage: "url(/src/assets/quizz-card-images/aventura.jpg)", backgroundSize: "cover", backgroundPosition: 'center' }}
                onClick={() => { handleChange('experience', 'Aventura'); handleNextScreen(); }}
              >Aventura</button>

              <button className='h-card' style={{backgroundImage: "url(/src/assets/quizz-card-images/fiesta.jpg)", backgroundSize: "cover", backgroundPosition: 'center' }}
                onClick={() => { handleChange('experience', 'Fiesta'); handleNextScreen(); }}
              >Fiesta</button>

              <button className='h-card' style={{backgroundImage: "url(/src/assets/quizz-card-images/turismo.jpg)", backgroundSize: "cover", backgroundPosition: 'center' }}
                onClick={() => { handleChange('experience', 'Turismo'); handleNextScreen(); }}
              >Turismo</button>
            </div>
            </div>
        )}


        {currentScreen === 2 && (
          <div className='content'>
            <h1>¿En qué lugar quieres estar?</h1>
            <div className='card-selection'>
              <button className='h-card' style={{backgroundImage: "url(/src/assets/quizz-card-images/playa.jpg)", backgroundSize: "cover", backgroundPosition: 'center' }}
                onClick={() => { handleChange('location', 'Playa'); handleNextScreen(); }}
              >Playa</button>

              <button className='h-card' style={{backgroundImage: "url(/src/assets/quizz-card-images/ciudad.jpg)", backgroundSize: "cover", backgroundPosition: 'center' }}
                onClick={() => { handleChange('location', 'Ciudad'); handleNextScreen(); }}
              >Ciudad</button>

              <button className='h-card' sDestinationtyle={{backgroundImage: "url(/src/assets/quizz-card-images/montana.jpg)", backgroundSize: "cover", backgroundPosition: 'center' }}
                onClick={() => { handleChange('location', 'Montana'); handleNextScreen(); }}
              >Montaña</button>

              <button className='h-card' style={{backgroundImage: "url(/src/assets/quizz-card-images/interior.jpg)", backgroundSize: "cover", backgroundPosition: 'center' }}
                onClick={() => { handleChange('location', 'Interior'); handleNextScreen(); }}
              >Interior</button>
            </div>
          </div>
        )}


        {currentScreen === 3 && (
          <div className='content'>
            <h1>¿Qué clima prefieres?</h1>
            <div className='card-selection'>
              <button className='v-card' style={{backgroundImage: "url(/src/assets/quizz-card-images/soleado.jpg)", backgroundSize: "cover", backgroundPosition: 'center'}}
              
              onClick={() => { handleChange('weather', 'Soleado'); handleNextScreen(); }}
              >Soleado</button>
              
              <button className='v-card' style={{backgroundImage: "url(/src/assets/quizz-card-images/frio.jpg)", backgroundSize: "cover", backgroundPosition: 'center'}}
              
              onClick={() => { handleChange('weather', 'Frio'); handleNextScreen(); }}
              >Frío</button>

              <button className='v-card' style={{backgroundImage: "url(/src/assets/quizz-card-images/neutro.jpg)", backgroundSize: "cover", backgroundPosition: 'center'}}
              
              onClick={() => { handleChange('weather', 'Templado'); handleNextScreen(); }}
              >Templado</button>
            </div>
          </div>
        )}


        {currentScreen === 4 && (
          <div className='content'>
            <h1>Por último, ¿tienes algún continente de preferencia?</h1>
            <div className='card-selection'>
                <button className='h-card' style={{backgroundImage: "url(/src/assets/quizz-card-images/europa.jpg)", backgroundSize: "cover", backgroundPosition: 'center'}}
                  onClick={() => { handleChange('continent', 'Europa'); handleSubmit(); }}
                >Europa</button>

                <button className='h-card' style={{backgroundImage: "url(/src/assets/quizz-card-images/asia.jpg)", backgroundSize: "cover", backgroundPosition: 'center'}}
                  onClick={() => { handleChange('continent', 'Asia'); handleSubmit(); }}
                >Asia</button>

                <button className='h-card' style={{backgroundImage: "url(/src/assets/quizz-card-images/africa.jpg)", backgroundSize: "cover", backgroundPosition: 'center' }}
                  onClick={() => { handleChange('continent', 'África'); handleSubmit(); }}
                >África</button>
                <button className='h-card' style={{backgroundImage: "url(/src/assets/quizz-card-images/america.jpg)", backgroundSize: "cover", backgroundPosition: 'center' }}
                  onClick={() => { handleChange('continent', 'América'); handleSubmit(); }}
                >América</button>

                <button className='h-card' style={{backgroundImage: "url(/src/assets/quizz-card-images/oceania.jpg)", backgroundSize: "cover", backgroundPosition: 'center' }}
                  onClick={() => { handleChange('continent', 'Oceanía'); handleSubmit(); }}
                >Oceanía</button>
            </div>
          </div>
        )}


        {currentScreen === 5 && (
          <div className='destinations'>
                {destinations.map((d, idx)=>{
                  return <DestinacionCard key={idx} text={d.destination.destinationName} onClick={() => {setFinalResult(d.destination); handleSelection()}}></DestinacionCard>
                })}
          </div>
        )}


        {currentScreen === 6 && (
          <div className="content">
          <section className="info-destination-section">
              <div className="recommendation-content">
                    <div className="destination-header">
                        <h1>{finalResult.destinationName}</h1>
  
                          <div className="tag-container">
                            <Tag text={finalResult.travelers.filter((traveler)=>{return formData.travelers === traveler})} />
                            <Tag text={finalResult.experience} />
                            <Tag text={finalResult.location} />
                            <Tag text={finalResult.weather} />
                            <Tag text={finalResult.continent} />
                        </div>
                    </div>
  
                    <h3>Según tus preferencias, creemos que {finalResult.destinationName} es el destino ideal para ti.</h3>
  
                    <div className="action-buttons">
                      <Link to='/Quizz'>
                        <ButtonSecondary text="Prueba de nuevo"/>
                      </Link>
                    </div>
              </div>
  
              <section className="premium-section">
                    <p className="meta">SI LO PREFIERES</p>
                  <p>Recibe un plan de experiencia completa: rutas, guía de lugares imprescindibles, 
                    itinerario por días, pasajes, hoteles... Tu viaje ya planificado con el{" "}
                  <strong>plan premium.</strong></p>
                  
                  <Link to='/'>
                      <ButtonMain text="Hazte Premium ahora"/>
                  </Link>
              </section>
            </section>
          </div>
      )}

      </form>
    </div>
  );
};

export default Quizz;
