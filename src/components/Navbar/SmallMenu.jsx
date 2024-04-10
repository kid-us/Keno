import React from "react";
import { Link } from "react-router-dom";
const SmallMenu = () => {
  return (
    <>
      <div className="position-relative animate__animated animate__bounceInDown shadow-lg">
        <div className="menu p-3 fw-semibold">
          <p className="bi-person-fill font-poppins fs-5 text-info">
            &nbsp; Lorem
          </p>
          <hr />
          <div className="mt-5">
            <p className="mb-4 pb-2">
              <Link to={"/wallet"} className="bi-wallet-fill text-white fs-5">
                &nbsp; Wallet
              </Link>
            </p>
            <p className="mb-4 pb-2">
              <Link
                to={"/wallet"}
                className="bi-bar-chart-fill text-white fs-5"
              >
                &nbsp; Leader Board
              </Link>
            </p>
            <p className="mb-4 pb-2">
              <Link to={"/wallet"} className="bi-person-fill text-white fs-5">
                &nbsp; Profile
              </Link>
            </p>
            <p className="mb-4 pb-2">
              <Link
                to={"/wallet"}
                className="bi-hourglass-split text-white fs-5"
              >
                &nbsp; History
              </Link>
            </p>
          </div>
          <hr />
          <p className="bi-power cursor">&nbsp; Logout</p>
          <p className="small text-dark text-center pt-4">&copy; Keno</p>
        </div>
      </div>
    </>
  );
};

export default SmallMenu;
