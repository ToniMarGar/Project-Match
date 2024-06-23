import React from "react";
import './Destination.css'

import DestinationCard from '../../components/Cards/DestinationCard/DestinationCard'

// Los Tags, como en el perfil, serán preferiblemente componentes
const PreferenceTag = ({ text }) => (
  <span className="preference-tag">{text}</span>
);

// El array de respuesta del back al cuestionario
const results = ["GRUPOS", "FIESTA", "PLAYA", "SOLEADO", "EUROPA"];


function Destination() {

  return (
    <main className="travel-recommendations">
      <section className="preferences-section">
        <div className="tag-container">
          {results.map((pref, index) => (
            <PreferenceTag key={index} text={pref} />
          ))}
        </div>

        <h1> Según tus preferencias, tus destinos ideales son: </h1>
      </section>

      <section className="destinations-grid">
        {destinations.map((dest, index) => (
          <DestinationCard key={index} {...dest} />
        ))}
      </section>
    </main>
  );
}

export default Destination;