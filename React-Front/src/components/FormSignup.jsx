import { useState } from "react";
import { signup } from "../service/auth";

const FormSignup = () => {
  const [username, setUserName] = useState();
  const [firstname, setFirstName] = useState();
  const [surname, setSurName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

    
    const handleSignUp = async () => {
        let data = { username: username, firstname: firstname, surname: surname, email: email, password: password }
        const result = await signup(data)
        localStorage.setItem("userEmail", result.user)
        localStorage.setItem("token", result.token);
        localStorage.setItem("role", result.role); 
        setEmail("")
    }

    
  return (
    <div>
      <form action="">
        <input
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          required
        />
        <input
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          required
        />
        <input
          onChange={(e) => {
            setSurName(e.target.value);
          }}
          required
        />
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
         value={email}
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
            handleSignUp();
          }}
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
