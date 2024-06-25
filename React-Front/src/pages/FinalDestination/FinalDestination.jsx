import React from "react";
import { Link } from "react-router-dom";
import './FinalDestination.css'

import Tag from '../../components/Tags/Tag/Tag'
import ButtonMain from '../../components/Button/ButtonMain/ButtonMain'
import ButtonSecondary from '../../components/Button/ButtonSecondary/ButtonSecondary'
import Skyscanner from '../../components/Button/ButtonBlueIcon/ButtonBlueIcon'

const tagResult = []

function FinalDestination({name, img}) {

  return (
    <main className="travel-recommendation">
        <div className="recommendation-container">

            <img 
            src={img}
            alt={name}
            className="destination-image" 
            />

          <section className="info-section">
            <div className="recommendation-content">
              <div className="destination-header">
                <h1>{name}</h1>

                <div className="tag-container">
                  {tagResult.map((tag, index) => (
                    <Tag key={index} text={tag} />
                  ))}
                </div>
              </div>

              <p>Según tus preferencias, creemos que {name} es el destino ideal para ti.</p>

              <div className="action-buttons">
                <Link to='/Quizz'>
                    <ButtonSecondary text="Prueba de nuevo"/>
                </Link>

                <Link to='/'> <Skyscanner/> </Link>
              </div>
            </div>

            <section className="premium-section">
                <p className="meta">SI LO PREFIERES</p>
                <p>
                Recibe un plan de experiencia completa: rutas, guía de lugares imprescindibles, itinerario por días, pasajes, hoteles... Tu viaje ya planificado con el{" "}
                <strong>plan premium.</strong></p>
                
                <Link to='/'>
                    <ButtonMain text="Hazte Premium ahora"/>
                </Link>
            </section>
          </section>
        </div>
    </main>
  );
}


export default FinalDestination
