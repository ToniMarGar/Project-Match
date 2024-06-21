import { useState } from "react";
import { signup } from "../service/auth";

const FormLogin = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
    
    const handleLogIn = async () => {
        let data = { username: name, password: password }
        const result = await signup(data)
        localStorage.setItem("token", result.token);
        localStorage.setItem("role", result.role); 
        setEmail("")
    }

    
  return (
    <div>
      <form action="">
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />

              <button
          onClick={(e) => {
            e.preventDefault();
            handleLogIn();
          }}
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
