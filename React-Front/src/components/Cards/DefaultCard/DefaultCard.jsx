import * as React from "react";
import './DefaultCard.css'

function DefaultCard({text}) {
  return (
    <button>
        <img loading="lazy" src="#" alt="Background"/>
        <h2>{text}</h2>
    </button>
  );
}

export default DefaultCard;