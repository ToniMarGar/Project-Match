import React from "react";
import { Link } from "react-router-dom";
import './Home.css'

import ButtonIcon from '../../components/Button/ButtonIcon/ButtonIcon'

function Home() {
    return (
      <>
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


      </>
    );
  }
  
  export default Home