import React, { useState } from "react";
import { logo } from "../../assets";
import SmallMenu from "./SmallMenu";

const Small = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="nav shadow py-12">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-1 col-md-2 col-3 pt-2">
              <img src={logo} alt="logo" width={"100px"} />
            </div>

            <div className="col-lg-11 col-md-10 col-9 fw-semibold">
              <div className="row justify-content-end text-end text-white">
                <p
                  onClick={() => setMenu(!menu)}
                  className={`${menu ? "bi-x-lg fs-3" : "bi-list fs-1"} mt-2`}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Small Menu */}
      {menu && <SmallMenu></SmallMenu>}
    </>
  );
};

export default Small;
