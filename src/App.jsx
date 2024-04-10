import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Pages/Login";
import Home from "./components/Pages/Home";
import Register from "./components/Pages/Register";
import Wallet from "./components/Pages/Wallet";
import LeaderBoard from "./components/Pages/LeaderBoard";
import Setting from "./components/Pages/Setting";
import Dashboard from "./components/Pages/Dashboard";
import { AuthProvider } from "./context/Auth";
import Protect from "./context/Protect";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home></Home>}></Route>
        <Route path="/login" exact element={<Login></Login>}></Route>
        <Route path="/register" exact element={<Register></Register>}></Route>
        <Route path="/wallet" exact element={<Wallet></Wallet>}></Route>
        <Route
          path="/leader-board"
          exact
          element={<LeaderBoard></LeaderBoard>}
        ></Route>
        <Route path="/setting" exact element={<Setting></Setting>}></Route>
        <Route
          path="/dashboard"
          exact
          element={<Dashboard></Dashboard>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
