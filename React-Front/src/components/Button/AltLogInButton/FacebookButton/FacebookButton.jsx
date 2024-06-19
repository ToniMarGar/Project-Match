import * as React from "react";
import '../CommonStyle.css'

function LogFacebookButton() {
  return (
      <button>
        <img 
          loading="lazy" 
          src="../../../../assets/start-session-logos/facebook.png" 
          alt="Log in with Facebook" 
        />
      </button>
  );
}

export default LogFacebookButton