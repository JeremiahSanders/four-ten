import React, { Component } from "react";
import { Card } from "./card";
import "./hand.css";

function getPossibleCardValue(array, index) {
  return array[index] ? array[index].value : 0;
}

function CardHolder({ children }) {
  return <span className="card-well">{children}</span>;
}

export function Hand({ cards = [], className = "" }) {
  const card1 = cards[0] ? (
    <CardHolder>
      <Card value={cards[0].value} />
    </CardHolder>
  ) : (
    <CardHolder>&nbsp;</CardHolder>
  );
  const card2 = cards[1] ? (
    <CardHolder>
      <Card value={cards[1].value} />
    </CardHolder>
  ) : (
    <CardHolder>&nbsp;</CardHolder>
  );
  const card3 = cards[2] ? (
    <CardHolder>
      <Card value={cards[2].value} />
    </CardHolder>
  ) : (
    <CardHolder>&nbsp;</CardHolder>
  );
  const card4 = cards[3] ? (
    <CardHolder>
      <Card value={cards[3].value} />
    </CardHolder>
  ) : (
    <CardHolder>&nbsp;</CardHolder>
  );

  const totalValue =
    getPossibleCardValue(cards, 0) +
    getPossibleCardValue(cards, 1) +
    getPossibleCardValue(cards, 2) +
    getPossibleCardValue(cards, 3);

  return (
    <div className={`hand ${className}`}>
      {card1}
      {card2}
      {card3}
      {card4}
      <label>Total: {totalValue}</label>
    </div>
  );
}
