import * as React from "react";
import './NavLink.css'

function NavLink({ text }) {
  return (
      <button className='nav'>{ text }</button>
  );
}

export default NavLink