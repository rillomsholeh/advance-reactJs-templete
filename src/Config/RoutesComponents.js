import React from "react";

// import necessary object from react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home, About, Profile, SignIn } from "../pages";
import Navbar from "../pages/components/Navbar";

const RoutesComponents = () => {
  return (
    <div>
      <Router>
        <Navbar />
        {/* code <Routes> and <Route> below, according to path and component */}
        <Routes>
          {/* bisa mengunakan exact bisa tidak mengunakan exact */}
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Profile" element={<Profile />} />
          <Route exact path="/SignIn" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
};

export default RoutesComponents;
