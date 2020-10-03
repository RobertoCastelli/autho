import React, { useContext } from "react";
import { DataContext } from "../context/context";

const SignOut = () => {
const { handleClick } = useContext(DataContext);

  return (
    <div>
      <button onClick={handleClick}>Sign Out</button>
    </div>
  );
};

export default SignOut;
