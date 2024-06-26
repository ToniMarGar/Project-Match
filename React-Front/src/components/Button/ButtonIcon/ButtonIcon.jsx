import React from "react";
import './ButtonIcon.css'
import Arrow from '../../../assets/other-icons/arrow-icon.png'


const ButtonIcon = ({text}) => (
  <>
    <button className="icon-button">
      <span>{text}</span>
      <img loading="lazy" 
      src={Arrow}
      alt="arrow icon" 
      className="arrow-icon" />
    </button>

  </>
);

export default ButtonIcon;