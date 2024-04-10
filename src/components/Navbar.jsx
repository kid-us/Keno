import React, { useState } from "react";
import Large from "./Navbar/Large";
import Small from "./Navbar/Small";

const Navbar = () => {
  return (
    <>
      {/* Large Device Navbar */}
      <div className="d-none d-md-block">
        <Large></Large>
      </div>
      {/* Small Device */}
      <div className="d-block d-md-none">
        <Small></Small>
      </div>
    </>
  );
};

export default Navbar;
