import React, { Component } from "react";
import "./stat-block.css";

function HeaderLabel({ text }) {
  return <div>{text}</div>;
}
function HeaderValue({ value }) {
  return <div>{value}</div>;
}

function HeaderItem({ label, value }) {
  return (
    <div>
      <HeaderLabel text={label} />
      <HeaderValue value={value} />
    </div>
  );
}

function Safety({ filled = false }) {
  return filled ? (
    <span className="safety filled">&#x2B24;</span>
  ) : (
    <span className="safety empty">&#x25CB;</span>
  );
}
function Safeties({ maxSafeties = 0, safeties = 0 }) {
  const glyphs = new Array(maxSafeties).fill().map((value, index) => {
    return <Safety filled={index < safeties} />;
  });
  return <HeaderItem label="Safeties" value={glyphs} />;
}

function Points({ gameTarget = 0, points = 0 }) {
  return <HeaderItem label="Points" value={`${points} / ${gameTarget}`} />;
}

function Progress({ round = 0, turn = 0 }) {
  return <HeaderItem label="Round / Turn" value={`${round}  / ${turn}`} />;
}

export function StatBlock({ className = "" }) {
  return (
    <div className={`stat-block ${className}`}>
      <Safeties safeties={1} maxSafeties={3} />
      <Points points={20} gameTarget={50} />
      <Progress round={4} turn={7} />
    </div>
  );
}
