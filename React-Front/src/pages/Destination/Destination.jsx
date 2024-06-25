import React from "react";
import { Link } from "react-router-dom";
import './Destination.css'

import DestinationCard from '../../components/Cards/DestinationCard/DestinationCard'
import Tag from '../../components/Tags/Tag/Tag'

// El array de respuesta del back al cuestionario
const resultTags = [];
const destinations = []

const TagGroup = ({ tags }) => (
  <div className="tag-group">
    {resultTags.map((tag, index) => (
      <Tag key={index} text={tag} />
    ))}
  </div>
);

function Destination() {
  return (
    <main className="travel-recommendations">
      <section className="preferences-section">
       {/*  <TagGroup key={index}  text={pref}  /> */}
        <h1> Según tus preferencias, tus destinos ideales son: </h1>
      </section>

      <section className="destinations-grid">
        <Link to='/Your-destination'>
          {destinations.map((dest, index) => (
            <DestinationCard key={index} {...dest} />
          ))}
        </Link>
      </section>
    </main>
  );
}

export default Destination;