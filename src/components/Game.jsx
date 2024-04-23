import React, { useState, useRef, useEffect } from "react";
import { numbers } from "../constant/numbers";
import "../modals.css";
import { set } from "react-hook-form";
import WinModal from "./Game/WinModal";
import LoseModal from "./Game/LoseModal";

const Game = () => {
  const [clickedNumbers, setClickedNumbers] = useState([]);
  const [calledNumbers, setCalledNumbers] = useState([]);
  const [matchedNumbers, setMatchedNumbers] = useState([]);
  const [notMatchedNumbers, setNotMatchedNumbers] = useState([]);
  const [playButtonClicked, setPlayButtonClicked] = useState(false);
  const [betAmount, setBetAmount] = useState(5);
  const [value, setValue] = useState(0);
  const [winModal, setWinModal] = useState(false);
  const [loseModal, setLoseModal] = useState(false);
  const [winAmount, setWinAmount] = useState();

  const odds = [1.5, 2.5, 3.5, 5.5, 7.5, 10.5, 20.5, 28, 100, 150];
  const count = useRef(0);

  useEffect(() => {
    if (count.current === 20) {
      if (matchedNumbers.length > 0) {
        setWinModal(true);
        let wind = betAmount * odds[matchedNumbers.length - 1];
        setWinAmount(wind);
      } else {
        setLoseModal(true);
      }
    }
  }, [count.current]);

  // Handle Number
  const handleNumber = (number) => {
    // Check if the number is already present in clickedNumbers
    if (!playButtonClicked) {
      const index = clickedNumbers.indexOf(number);

      if (index !== -1) {
        // If the number is already present, remove it
        setClickedNumbers((prevNumbers) =>
          prevNumbers.filter((num) => num !== number)
        );
      } else if (clickedNumbers.length < 10) {
        // Play sound
        const audio = new Audio("assets/click.mp3");
        audio.play();

        // If the number is not present and less than 10 numbers selected, add it
        setClickedNumbers((prevNumbers) => [...prevNumbers, number]);
      }
    }
  };

  // Generate 10 Numbers
  function generateRandomNumbers(num) {
    setValue(num);
    var numbers = [];
    var result = [];

    // Function to check if a number is already in the array
    function isInArray(array, number) {
      return array.indexOf(number) > -1;
    }

    // Generate num non-repeating random numbers
    while (result.length < num) {
      var randomNumber = Math.floor(Math.random() * 80) + 1;
      if (!isInArray(numbers, randomNumber)) {
        result.push(randomNumber);
        numbers.push(randomNumber);
      }
    }
    setClickedNumbers(result);
  }

  //   Generate Called Numbers
  function generateCalledNumbers(num) {
    var numbers = [];
    var result = [];

    // Function to check if a number is already in the array
    function isInArray(array, number) {
      return array.indexOf(number) > -1;
    }

    // Generate num non-repeating random numbers
    while (result.length < num) {
      var randomNumber = Math.floor(Math.random() * 80) + 1;
      if (!isInArray(numbers, randomNumber)) {
        result.push(randomNumber);
        numbers.push(randomNumber);
      }
    }
    return result;
  }

  // Generate Numbers
  const generateNum = (num) => {
    if (playButtonClicked) {
      location.reload();
    } else {
      var numbers = [];
      var result = [];

      function isOdd(number) {
        if (num === "odd") {
          return number % 2 !== 0;
        } else {
          return number % 2 === 0;
        }
      }

      function isInArray(array, number) {
        return array.indexOf(number) > -1;
      }

      while (result.length < 10) {
        var randomNumber = Math.floor(Math.random() * 80) + 1;
        if (isOdd(randomNumber) && !isInArray(numbers, randomNumber)) {
          result.push(randomNumber);
          numbers.push(randomNumber);
        }
      }
      setClickedNumbers(result);
    }
  };

  // Handle Play Button
  const handlePlay = () => {
    setPlayButtonClicked(true);
    const numbers = generateCalledNumbers(20);
    setCalledNumbers(numbers);

    for (let i = 0; i < numbers.length; i++) {
      setTimeout(() => {
        if (clickedNumbers.includes(numbers[i])) {
          setMatchedNumbers((prevState) => [...prevState, numbers[i]]);
        } else {
          setNotMatchedNumbers((prevState) => [...prevState, numbers[i]]);
        }

        count.current = i + 1;
      }, 500 * i);
    }
  };

  const handleClear = () => {
    if (playButtonClicked) {
      location.reload();
    } else {
      setClickedNumbers([]);
    }
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-9 col-12">
          <div className="row justify-content-center">
            {numbers.map((num, index) => (
              <>
                <div
                  key={index}
                  onClick={() => handleNumber(num)}
                  className={`numbers-container mx-1 text-center rounded 
                    ${
                      playButtonClicked &&
                      !clickedNumbers.includes(num) &&
                      "bg-disabled text-secondary"
                    }
                    ${
                      clickedNumbers.includes(num)
                        ? "bg-selected text-white"
                        : clickedNumbers.length < 10
                        ? "bg-default"
                        : "bg-disabled text-secondary"
                    }
                    ${
                      matchedNumbers.length > 0 &&
                      matchedNumbers.includes(num) &&
                      "bg-win"
                    }
                    ${
                      notMatchedNumbers.length > 0 &&
                      notMatchedNumbers.includes(num) &&
                      "text-danger"
                    }
                     `}
                >
                  <p className="numbers font-poppins pt-lg-3">{num}</p>
                </div>
                {num === 40 && <p className="text-center text-info"></p>}
              </>
            ))}
          </div>
        </div>
        <div className="col-lg-4 col-md-3 col-12">
          {/* <p className="text-white">{count.current}</p> */}
          {/* Button */}
          <div className="row justify-content-center">
            <div className="col-6">
              <div class="input-group mb-3">
                <label class="input-group-text bi-robot text-dark"></label>

                <select
                  className="form-select py-2 fw-semibold"
                  disabled={playButtonClicked && true}
                  onChange={() =>
                    generateRandomNumbers(parseInt(event.target.value))
                  }
                  value={parseInt(value)}
                >
                  <option value="Auto Select" selected hidden>
                    Auto Select
                  </option>
                  <option value="3">Quick 3</option>
                  <option value="4">Quick 4</option>
                  <option value="5">Quick 5</option>
                  <option value="6">Quick 6</option>
                  <option value="7">Quick 7</option>
                  <option value="8">Quick 8</option>
                  <option value="9">Quick 9</option>
                  <option value="10">Quick 10</option>
                </select>
              </div>
            </div>
            <div className="col-6">
              {playButtonClicked ? (
                <button
                  disabled
                  className="button-disabled btn-3 py-2 w-100"
                  style={{ cursor: "not-allowed" }}
                >
                  Clear
                </button>
              ) : (
                <button
                  onClick={() => handleClear()}
                  className="button btn-2 w-100 py-2"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="col-6">
              {playButtonClicked ? (
                <button
                  disabled
                  className="button-disabled btn-1 py-2 w-100"
                  style={{ cursor: "not-allowed" }}
                >
                  Even
                </button>
              ) : (
                <button
                  onClick={() => generateNum("even")}
                  className="button btn-1 w-100 mb-2 py-2"
                >
                  Even
                </button>
              )}
            </div>
            <div className="col-6">
              {playButtonClicked ? (
                <button
                  disabled
                  className="button-disabled btn-2 py-2 w-100"
                  style={{ cursor: "not-allowed" }}
                >
                  Odd
                </button>
              ) : (
                <button
                  onClick={() => generateNum("odd")}
                  className="button btn-2 w-100 py-2"
                >
                  Odd
                </button>
              )}
            </div>
          </div>
          {/* Odds */}
          {clickedNumbers.length > 0 && (
            <div
              className="row fw-semibold mx-4 mt-3"
              style={{ borderRadius: "4px" }}
            >
              {/* <p className="text-white fw-semibold text-uppercase fs-5">Odds</p> */}
              {clickedNumbers.map((num, index) => (
                <div className="col-6">
                  <div className="row g-0 bg-selected rounded mb-2 pt-3">
                    <div className="col-5 rounded me-2">
                      <p className=" font-poppins text-white text-center">
                        {index + 1}
                      </p>
                    </div>
                    <div className="col-6 rounded">
                      <p className=" font-poppins text-white ps-4">
                        {odds[index]}X
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* Input */}
          <div className="row justify-content-center mt-4">
            <div className="col-5">
              <input
                type="number"
                disabled={playButtonClicked && true}
                className="form-control bet-amount-input fw-semibold text-center font-poppins fs-5"
                placeholder="0.00"
                onChange={() => setBetAmount(event.target.value)}
                value={betAmount}
                min={5}
              />
            </div>
            <div className="col-7">
              {clickedNumbers.length > 0 &&
              betAmount >= 5 &&
              !playButtonClicked ? (
                <button
                  onClick={() => handlePlay()}
                  className="button btn-3 px-5 w-100"
                >
                  PLAY
                </button>
              ) : (
                <button
                  disabled
                  className="button-disabled btn-3 px-5 w-100"
                  style={{ cursor: "not-allowed" }}
                >
                  PLAY
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {winModal && <WinModal wins={winAmount}></WinModal>}
      {loseModal && <LoseModal></LoseModal>}
    </>
  );
};

export default Game;
