import React from "react";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import SignUp from "./components/SignUp";
import Header from "./components/Header";
import Footer from './components/Footer'
import ContextProvider from "./context/context";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <ContextProvider>
        <Header />
        <SignUp />
        <SignIn />
        <SignOut />
        <Footer /> 
      </ContextProvider>
    </Router>
  );
}

export default App;
