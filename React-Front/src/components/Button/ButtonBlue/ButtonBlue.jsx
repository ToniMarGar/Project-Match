import React from "react";
import './ButtonBlue.css'
import Arrow from '../../../assets/other-icons/arrow-icon.png'


const ButtonBlue = ({text}) => (
  <>
    <button className="icon-button">
      <span>{text}</span>
      <img loading="lazy" 
      src={Arrow}
      alt="Arrow icon" 
      className="arrow-icon" />
    </button>

  </>
);

export default ButtonBlue;