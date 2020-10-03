import React, { createContext, useState } from "react";
import { auth } from "../firebase/firebaseConfig";

export const DataContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmitIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(user.email, user.password)
      .then((res) => console.log(res))
      .catch((err) => console.log(`oos! something wrong: ${err.message}`));
  };

  const handleSubmitUp = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(user.email, user.password).then();
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(`Signed Out`);
    auth.signOut();
  };

  return (
    <DataContext.Provider
      value={{ handleClick, handleChange, handleSubmitUp, handleSubmitIn }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default ContextProvider;
