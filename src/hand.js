import React, { Component } from "react";
import { Card, FlippedCard } from "./card";
import "./hand.css";

function getPossibleCardValue(array, index) {
  return array[index] ? array[index].value : 0;
}

function CardHolder({ children }) {
  return <div className="card-well">{children}</div>;
}

export function Hand({ cards = [], className = "", title = "" }) {
  const cardSize = "5em";
  const cardBuilder = index => cards[index]
    ? (
      <CardHolder>
        <Card size={cardSize} value={cards[index].value} />
      </CardHolder>
    ) : (
      <CardHolder>
        <FlippedCard size={cardSize} />
      </CardHolder>
    );
  const card1 = cardBuilder(0);
  const card2 = cardBuilder(1);
  const card3 = cardBuilder(2);
  const card4 = cardBuilder(3);

  const totalValue =
    getPossibleCardValue(cards, 0) +
    getPossibleCardValue(cards, 1) +
    getPossibleCardValue(cards, 2) +
    getPossibleCardValue(cards, 3);

  return (
    <div className={`hand-wrapper ${className}`}>
      <div className="hand-title">{title}</div>
      <div className="hand-total">Total: {totalValue}</div>
      <div className={`hand`}>
        {card1}
        {card2}
        {card3}
        {card4}
      </div>
    </div>
  );
}
