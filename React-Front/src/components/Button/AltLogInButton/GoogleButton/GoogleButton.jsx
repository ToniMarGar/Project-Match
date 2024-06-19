import * as React from "react";
import '../CommonStyle.css'

function LogGoogleButton() {
  return (
      <button>
        <img 
          loading="lazy" 
          src="../../../../assets/start-session-logos/google.png" 
          alt="Log in with Google" 
        />
      </button>
  );
}

export default LogGoogleButton