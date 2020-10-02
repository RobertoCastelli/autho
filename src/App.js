import React from "react";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div>
      <h1>HOME</h1>
      <SignUp />
      <SignIn />
      <SignOut />
    </div>
  );
}

export default App;
