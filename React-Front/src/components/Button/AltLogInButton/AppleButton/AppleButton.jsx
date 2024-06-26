import * as React from "react";
import { Link } from "react-router-dom";

import Apple from '../../../../assets/start-session-logos/apple.png'
import '../CommonStyle.css'

function LogAppleButton() {
  return (
    <Link href='https://appleid.apple.com/'>
      <button className='other-signout'>
        <img 
          className='icon-signout'
          loading="lazy" 
          src={Apple}
          alt="Log in with Apple" 
        />
      </button>
    </Link>
  );
}

export default LogAppleButton