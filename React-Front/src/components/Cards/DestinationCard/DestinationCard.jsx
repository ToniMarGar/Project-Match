import * as React from "react";
import './DestinationCard.css'

function DestinationCard({name, imageSrc}) {
  return (
    <article>
      <img
        loading="lazy"
        src={imageSrc}
        alt="Destination image"
      />
      <h2>{name}</h2>
    </article>
  );
}

export default DestinationCard;