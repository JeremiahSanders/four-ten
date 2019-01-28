import React, { Component } from "react";
import "./card.css";

export function CardOne() {
  // "fill:#f5f5f1;fill-opacity:1;stroke:#21200b;stroke-width:0.5291667;stroke-linecap:butt;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:normal"
  const cardRectangleStyle = {
    fill: "#f5f5f1",
    fillOpacity: 1,
    stroke: "#21200b",
    strokeWidth: 0.5291667,
    strokeLinecap: "butt",
    strokeLinejoin: "bevel",
    strokeMiterlimit: 4,
    strokeDasharray: "none",
    strokeOpacity: 1,
    paintOrder: "normal"
  };
  // "font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:50.79999924px;line-height:1.25;font-family:Calibri;-inkscape-font-specification:Calibri;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332"
  const characterStyle = {
    fontStyle: "normal",
    fontVariant: "normal",
    fontWeight: "normal",
    fontStretch: "normal",
    fontSize: "50.79999924px",
    lineHeight: 1.25,
    fontFamily: "Calibri",
    letterSpacing: "0px",
    wordSpacing: "0px",
    fill: "#000000",
    fillOpacity: 1,
    stroke: "none",
    strokeWidth: 0.26458332
  };
  // "font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:50.79999924px;font-family:Calibri;-inkscape-font-specification:Calibri;stroke-width:0.26458332"
  const pathStyle = {
    fontStyle: "normal",
    fontVariant: "normal",
    fontWeight: "normal",
    fontStretch: "normal",
    fontSize: "50.79999924px",
    fontFamily: "Calibri",
    strokeWidth: 0.26458332
  };
  return (
    <svg
      id="svg8"
      version="1.1"
      viewBox="0 0 38.029167 50.529167"
      height="50.529167mm"
      width="38.029167mm"
    >
      <defs id="defs2" />
      <rect
        style={cardRectangleStyle}
        id="rect4518"
        width="37.5"
        height="50"
        x="0.26458374"
        y="0.26458362"
        rx="2.5"
        ry="2.5"
      />
      <g
        aria-label="1"
        style={characterStyle}
        id="text4522"
        transform="translate(42.04234,-29.932858)"
      >
        <path
          d="m -13.688794,69.670978 q 0,0.471289 -0.07441,0.79375 -0.07441,0.322461 -0.198438,0.520898 -0.124023,0.198438 -0.297656,0.297656 -0.148828,0.07442 -0.322461,0.07442 h -16.767969 q -0.173632,0 -0.32246,-0.07442 -0.148829,-0.09922 -0.297657,-0.297656 -0.124023,-0.198437 -0.198437,-0.520898 -0.07441,-0.322461 -0.07441,-0.79375 0,-0.446485 0.07441,-0.768945 0.07441,-0.322461 0.173633,-0.520899 0.124023,-0.223242 0.272851,-0.322461 0.173633,-0.124023 0.37207,-0.124023 h 6.697266 V 43.526838 l -6.201172,3.695898 q -0.471289,0.248047 -0.768945,0.297656 -0.272852,0.04961 -0.446484,-0.09922 -0.173633,-0.173632 -0.248047,-0.545703 -0.04961,-0.37207 -0.04961,-0.942578 0,-0.421679 0.02481,-0.719336 0.04961,-0.297656 0.124023,-0.496093 0.07441,-0.198438 0.198438,-0.347266 0.148828,-0.148828 0.37207,-0.297656 l 7.391797,-4.737696 q 0.09922,-0.07441 0.248047,-0.124023 0.148828,-0.04961 0.37207,-0.09922 0.223242,-0.04961 0.520899,-0.04961 0.297656,-0.02481 0.74414,-0.02481 0.595313,0 0.992188,0.04961 0.396875,0.04961 0.620117,0.148828 0.223242,0.07441 0.297656,0.223242 0.07441,0.124023 0.07441,0.272851 v 28.20293 h 5.804297 q 0.198437,0 0.37207,0.124023 0.173633,0.09922 0.272852,0.322461 0.124023,0.198438 0.173633,0.520899 0.07441,0.32246 0.07441,0.768945 z"
          style={pathStyle}
          id="path4577"
        />
      </g>
    </svg>
  );
}

export function Card({ value }) {
  return value == 1 ? <CardOne /> : <span className="card">{value}</span>;
}
