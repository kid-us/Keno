import React from "react";

const LoseModal = () => {
  return (
    <>
      <div className="overlay"></div>
      <div className="lose-modal p-4 text-center">
        <h1 className="fs-1 bi-heartbreak text-white"></h1>

        <p className="fs-4 font-poppins">You Lose</p>
        <button className="button" onClick={() => location.reload()}>
          Try Again!
        </button>
      </div>
    </>
  );
};

export default LoseModal;
