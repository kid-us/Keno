import React, { useState } from "react";
import LargeMenu from "./LargeMenu";
import { logo } from "../../assets";

const Large = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="nav shadow pt-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-1 col-md-2 col-3 pt-2">
              <img src={logo} alt="logo" width={"100px"} />
            </div>

            <div className="col-lg-11 col-md-10 col-9 fw-semibold">
              <div className="row justify-content-end text-end text-white">
                {/* <div className="col-2 pt-2">
                  <p className="bi-wallet font-poppins"> &nbsp; 340 Br</p>
                </div> */}
                <div className="col-2 pt-2">
                  <p
                    onClick={() => setMenu(!menu)}
                    className="text-uppercase cursor text-info"
                  >
                    Lorem{" "}
                    <span
                      className={`${
                        menu ? "bi-caret-up-fill" : "bi-caret-down-fill"
                      } ms-1`}
                    ></span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Menu Dropdown */}
      {menu && <LargeMenu></LargeMenu>}
    </>
  );
};

export default Large;
