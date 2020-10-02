import React from "react";
import { auth } from "../firebase/firebaseConfig";

const SignOut = () => {
  const handleClick = (e) => {
    e.preventDefault();
    auth.signOut();
    console.log("You have sign out");
  };

  return (
    <div>
      <button onClick={handleClick}>Sign Out</button>
    </div>
  );
};

export default SignOut;
