import React from "react";
import './Destination.css'

import DestinationCard from '../../components/Cards/DestinationCard/DestinationCard'
import Tag from '../../components/Tags/Tag/Tag'


// Los Tags, como en el perfil, serán preferiblemente componentes
const TagGroup = ({ tags }) => (
  <div className="tag-group">
    {tags.map((tag, index) => (
      <Tag key={index} text={tag} />
    ))}
  </div>
);

// El array de respuesta del back al cuestionario
const resultTags = [];
const destinations = []


function Destination() {

  return (
    <main className="travel-recommendations">
      <section className="preferences-section">
        <TagGroup key={index} text={pref} />
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