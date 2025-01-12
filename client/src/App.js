import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import About from "./components/About";
import Auth from "./components/Auth";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import SignupTeacher from "./components/SignupTeacher";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/signupTeacher" element={<SignupTeacher />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};
export default App;
