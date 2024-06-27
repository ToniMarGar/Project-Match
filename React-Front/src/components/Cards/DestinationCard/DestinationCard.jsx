import * as React from "react";
import './DestinationCard.css'


function DestinacionCard({text, img}) {
  return (
    <div style={{ backgroundImage: `url(${img})` }}>
      <h2>{text}</h2>
    </div>
  );
}

export default DestinacionCard;
