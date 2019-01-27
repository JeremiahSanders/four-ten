import React, { Component } from "react";
import "./card.css";

export function Card({ value }) {
  return <span className="card">{value}</span>;
}
