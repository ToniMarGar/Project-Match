import * as React from "react";
import 'DestinacionCard.css'

function DestinationCard({name, image, tagline}) {
  return (
    <article>
      <img
        loading="lazy"
        src={image}
        alt="Destination image"
      />
      <h2>{name}</h2>
      {/*<h3>{tagline}</h3> En caso de que podamos ampliar*/}
    </article>
  );
}

export default DestinationCard;