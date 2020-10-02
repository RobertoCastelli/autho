import React from "react";
import { useState } from "react";
import { auth } from "../firebase/firebaseConfig";

const SignIn = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then((res) => console.log(res))
      .catch((err) => console.log(`oos! something wrong: ${err.message}`));
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
