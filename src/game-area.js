import React, { Component } from "react";
import { StatBlock } from "./stat-block";
import { Hand } from "./hand";
import "./game-area.css";

export function GameArea({ hand = {}, shadow = {}, home = {} }) {
  return (
    <div className="game-wrapper">
      <StatBlock className="stat-section" />
      <Hand cards={hand.cards} className="hand-section" />
      <Hand cards={shadow.cards} className="shadow-section" />
      <Hand cards={home.cards} className="home-section" />
    </div>
  );
}
