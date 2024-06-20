import * as React from "react";
import '../CommonStyle.css'

function LogAppleButton() {
  return (
      <button>
        <img 
          loading="lazy" 
          src="../../../../assets/start-session-logos/apple.png" 
          alt="Log in with Apple" 
        />
      </button>
  );
}

export default LogAppleButton