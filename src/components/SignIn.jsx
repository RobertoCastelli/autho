import React, { useContext } from "react";
import { DataContext } from "../context/context";

const SignIn = () => {
  const {  handleSubmitIn, handleChange  } = useContext(DataContext);

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmitIn}>
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
