import { useState } from "react";
import { login } from "../services/auth";
import toast, { Toaster } from 'react-hot-toast';

const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    
    const handleLogIn = async () => {
      try {
        let data = { email: email, password: password }
        console.log("data: " , data)
        const result = await login(data)
        console.log(result)
        localStorage.getItem("token", result.token);
        localStorage.getItem("role", result.role); 
        setEmail("")
      /* console.log(token);
      console.log(role); */

      } catch (error) {
        console.log(error)
        toast.error ('Error al hacer Login.')
      }
        
    }
    
  return (
    <div>
      <Toaster />
      <form action="">
        <input
          onChange={(e) => {
            setEmail(e.target.value);
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
          Log In
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
