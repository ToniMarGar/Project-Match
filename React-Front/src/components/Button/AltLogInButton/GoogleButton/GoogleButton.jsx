import * as React from "react";
import { Link } from "react-router-dom";

import Google from '../../../../assets/start-session-logos/google.png'
import '../CommonStyle.css'

function LogGoogleButton() {
  return (
    <Link href='https://accounts.google.com/InteractiveLogin/signinchooser?elo=1&ifkv=AS5LTAT5sOxrF5zDODR7vw8ZuvtRulqZi9tZG85zMaUUtTvk43ipr5YRQKoCnkl7ulx4ossJ3vehKQ&ddm=0&flowName=GlifWebSignIn&flowEntry=ServiceLogin'>
      <button className='other-signout'>
        <img 
          className='icon-signout'
          loading="lazy" 
          src={Google}
          alt="Log in with Google" 
        />
      </button>
    </Link>
  );
}

export default LogGoogleButton