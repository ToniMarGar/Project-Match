import React, { useState } from 'react';
import Card from '../../components/Cards/DefaultCard/DefaultCard'

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
          <Card onClick={() => { handleChange('travelers', 'solo'); handleNextScreen(); }}>Solo</Card>
          <Card onClick={() => { handleChange('travelers', 'familia'); handleNextScreen(); }}>En familia</Card>
          <Card onClick={() => { handleChange('travelers', 'pareja'); handleNextScreen(); }}>En pareja</Card>
          <Card onClick={() => { handleChange('travelers', 'grupo'); handleNextScreen(); }}>Grupo</Card>
        </div>
      )}

      {currentScreen === 1 && (
        <div className='question2'>
          <h1>¿Qué tipo de experiencia buscas?</h1>
          <Card onClick={() => { handleChange('type', 'cultura'); handleNextScreen(); }}>Cultura</Card>
          <Card onClick={() => { handleChange('type', 'relax'); handleNextScreen(); }}>Relax</Card>
          <Card onClick={() => { handleChange('type', 'iconos'); handleNextScreen(); }}>Lugares icónicos</Card>
          <Card onClick={() => { handleChange('type', 'aventura'); handleNextScreen(); }}>Aventura</Card>
          <Card onClick={() => { handleChange('type', 'fiesta'); handleNextScreen(); }}>Fiesta</Card>
          <Card onClick={() => { handleChange('type', 'turismo'); handleNextScreen(); }}>Turismo</Card>
        </div>
      )}

      {currentScreen === 2 && (
        <div className='question3'>
          <h1>¿En qué lugar quieres estar?</h1>
          <Card onClick={() => { handleChange('place', 'playa'); handleNextScreen(); }}>Playa</Card>
          <Card onClick={() => { handleChange('place', 'ciudad'); handleNextScreen(); }}>Ciudad</Card>
          <Card onClick={() => { handleChange('place', 'montana'); handleNextScreen(); }}>Montaña</Card>
          <Card onClick={() => { handleChange('place', 'interior'); handleNextScreen(); }}>Interior</Card>
        </div>
      )}

      {currentScreen === 3 && (
        <div className='question4'>
          <h1>¿Qué clima prefieres?</h1>
          <Card onClick={() => { handleChange('weather', 'soleado'); handleNextScreen(); }}>Soleado</Card>
          <Card onClick={() => { handleChange('weather', 'frio'); handleNextScreen(); }}>Frío</Card>
          <Card onClick={() => { handleChange('weather', 'neutro'); handleNextScreen(); }}>Neutral</Card>
        </div>
      )}

      {currentScreen === 4 && (
        <div className='question5'>
          <h1>Por último, ¿tienes algún continente de preferencia?</h1>
          <Card onClick={() => { handleChange('continent', 'Europa'); handleSubmit(); }}>Europa</Card>
          <Card onClick={() => { handleChange('continent', 'Asia'); handleSubmit(); }}>Asia</Card>
          <Card onClick={() => { handleChange('continent', 'Africa'); handleSubmit(); }}>África</Card>
          <Card onClick={() => { handleChange('continent', 'America'); handleSubmit(); }}>América</Card>
          <Card onClick={() => { handleChange('continent', 'Oceania'); handleSubmit(); }}>Oceanía</Card>
        </div>
      )}
    </form>
        
    {/* Aquí podrái ir una barra de progreso, si deira tiempo */}  
    </>
  );
};

export default Quizz;
