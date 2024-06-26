import * as React from "react";
import './ButtonMain.css'

function ButtonMain({text, func, }) {
    return (<button className='main' onClick={func}>{text}</button>)
  }
  
  export default ButtonMain