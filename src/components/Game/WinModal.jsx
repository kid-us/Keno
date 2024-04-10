import React from "react";

const WinModal = ({ wins }) => {
  return (
    <>
      <div className="overlay"></div>
      <div className="win-modal p-4 text-center">
        <h1 className="fs-1 bi-trophy-fill text-white"></h1>
        <p className="fs-4 font-poppins">
          You won <span className="text-white fs-2 font-poppins">{wins}</span>{" "}
          ETB
        </p>
        <p className="fw-semibold fs-5">Congrats !</p>
        <button className="button" onClick={() => location.reload()}>
          {" "}
          Win Again!
        </button>
      </div>
    </>
  );
};

export default WinModal;
