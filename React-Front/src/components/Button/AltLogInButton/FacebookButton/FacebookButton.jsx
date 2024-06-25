import * as React from "react";
import { Link } from "react-router-dom";

import Facebook from '../../../../assets/start-session-logos/facebook.png'
import '../CommonStyle.css'

function LogFacebookButton() {
  return (
    <Link href='https://www.facebook.com/login/'>
      <button className='other-signout'>
        <img 
          className='icon-signout'
          loading="lazy" 
          src={Facebook}
          alt="Log in with Facebook" 
        />
      </button>
    </Link>
  );
}

export default LogFacebookButton