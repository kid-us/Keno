import React, { useState } from "react";
import Navbar from "../Navbar";
import Game from "../Game";

const Home = () => {
  return (
    <div>
      <div className="fixed-top">
        <Navbar></Navbar>
      </div>
      <div className="container mt-5 pt-lg-5 pt-4">
        <Game></Game>
      </div>
    </div>
  );
};

export default Home;
