import React from "react";
import { Link } from "react-router-dom";
import './Home.css'

import ButtonIcon from '../../components/Button/ButtonIcon/ButtonIcon'
import ButtonBlue from "../../components/Button/ButtonBlue/ButtonBlue";
import Multiple from '../../assets/home-images/multiple.png'
import Discover from '../../assets/home-images/discover.png'
import Disconnect from '../../assets/home-images/disconect.png'

function Home() {
  return (
    <main className="home-page">
      <section className="hero">
         <div className="hero-content">
          <div>
            <h1 className="huge, h-text"> Haz <span>match </span> 
            con tu siguente <span>travel</span> </h1>
            <h2 className='h-text'>¿No sabes donde viajar? Descubre tu siguiente destino en función de tus preferencias</h2>
          </div>

          <Link to='/Quizz'>
            <ButtonIcon text='Haz el test'></ButtonIcon>
          </Link>
        </div>
      </section>


      <section className="travel-match-quizz">
        <img 
          src={Discover}
          alt='Haz el quizz'
          className="home-img" 
        />

        <div className="text-home-section">
          <h2>¿Cómo funciona Travel-Match?</h2>

          <h3>¿Alguna vez has querido hacer una escapada pero no encuentras el lugar perfecto? Travel-match te acerca a tu siguente destino.
          <br /><br />Solo tienes que rellenar un test con cinco preguntas básicas, y nuestro buscador elegirá entre cientos de destinos aquel que más se ajusta a tí.
          </h3>

          <Link to='/Quizz'>
            <ButtonIcon text='Pruébalo'></ButtonIcon>
          </Link>
        </div>
      </section>

      <section className="signup-cta">
        <div className="text-home-section">
          <h2>¿Quieres revisar tus últimos resultados?</h2>

          <h3>Regístrate para poder hacer un seguimiento de tus últimas elecciones y poder decidir mejor qué destino te apetece más, según tus elecciones. </h3>

          <Link to='/SignUp'>
            <ButtonIcon text='Regístrate'></ButtonIcon>
          </Link>
        </div>

        <img 
          src={Multiple}
          alt='Regístrate'
          className="home-img" 
        />
      </section>

      <section className="premium-suggestion">
        <div className="text-home-section">
          <h2>Todo tu viaje planificado con Travel-Match</h2>

          <h3>Hoteles, pasajes, itinerarios, lugares, restaurantes, actividades... Con el 
          <strong>plan premium</strong>, todo tu viaje queda planeado, tú solo tienes que reservar.</h3>

          <Link to='/'>
            <ButtonBlue text='Regístrate'></ButtonBlue>
          </Link>
        </div>

        <img 
          src={Disconnect}
          alt='Plan premium'
          className="home-img" 
        />
      </section>
    </main>
  );
}
  
export default Home
  