import * as React from "react";

import Apple from '../../../../assets/start-session-logos/apple.png'
import '../CommonStyle.css'
import { Link } from "react-router-dom";

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