import React from "react";
import './ButtonIcon.css'


const ButtonIcon = ({text}) => (
  <>
    <button className="icon-button">
      <span>{text}</span>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e938c88205f4d91a65aee81c39e6a6110720936e15fef6432d5f9b86f2158bc2?apiKey=d0e5275347df4fb3abc0d1041ed2568c&" alt="" className="arrow-icon" />
    </button>

  </>
);

export default ButtonIcon;