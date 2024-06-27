import * as React from "react";
import './DestinationCard.css'


function DestinacionCard({text}) {
  return (
    <div className="travel-card">
      <h3 className="final-title" >{text}</h3>
    </div>
  );
}

export default DestinacionCard;
