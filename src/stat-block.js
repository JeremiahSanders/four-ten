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

function Safeties({ safeties = 0 }) {
  return <HeaderItem label="Safeties" value={safeties} />;
}

function Points({ points = 0 }) {
  return <HeaderItem label="Points" value={points} />;
}

function Progress({ round = 0, turn = 0 }) {
  return <HeaderItem label="Round / Turn" value={`${round}  / ${turn}`} />;
}

export function StatBlock({ className = "" }) {
  return (
    <div className={`stat-block ${className}`}>
      <Safeties safeties={1} />
      <Points points={20} />
      <Progress round={4} turn={7} />
    </div>
  );
}
