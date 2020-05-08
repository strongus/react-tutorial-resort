import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Rooms from "./pages/Rooms";

function App() {
  return (
    <>
      <Home />
      <Rooms/>
      <SingleRoom />
      <Error />
    </>
  );
}

export default App;
