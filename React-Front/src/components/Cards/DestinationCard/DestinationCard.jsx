import * as React from "react";
import './DestinationCard.css'


function DestinacionCard({text, img}) {
  return (
    <div className="travel-card" style={{ backgroundImage: `url(${img})` }}>
      <h2 className="final-title" >{text}</h2>
    </div>
  );
}

export default DestinacionCard;
