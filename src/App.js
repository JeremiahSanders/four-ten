import React, { Component } from "react";
import "./App.css";
import { GameArea } from "./game-area";

export function App() {
  const hand = {
    cards: [{ value: 4 }, { value: 2 }]
  };
  const shadow = {
    cards: [{ value: 1 }, { value: 1 }, { value: 1 }]
  };
  const home = {
    cards: [{ value: 4 }, { value: 3 }, { value: 1 }]
  };
  return <GameArea hand={hand} shadow={shadow} home={home} />;
}

export default App;
