import React, { useContext } from "react";
import { DataContext } from "../context/context";

const SignUp = () => {
  const {  handleSubmitUp, handleChange  } = useContext(DataContext);;

  return (
    <div>
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmitUp}>
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
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
