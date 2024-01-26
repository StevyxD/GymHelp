import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Diet from "./components/Diet";
import Posture from "./components/Posture";
import Contact from "./components/Contact";
import Signin from "./components/register/Signin";
import Register from "./components/register/Register";
import Info from "./components/register/Info";



const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Diet" element={<Diet />} />
        <Route path="/Posture" element={<Posture />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
