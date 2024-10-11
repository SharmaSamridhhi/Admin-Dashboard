import { useState } from "react";
import "./login.scss";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [error, setError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className='login'>
      <form onSubmit={handleLogin}>
        <input
          type='email'
          placeholder='email'
          // onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          // onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Login</button>
        {error && <span>Wrong email or password!</span>}
      </form>
    </div>
  );
};

export default Login;
