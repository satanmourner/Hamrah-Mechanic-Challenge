import React from "react";
import "./css/header.css";
import icon from "./images/icon.svg";
import github from "./images/github.svg";

export default function Header() {
  return (
    <header>
      <img src={icon} alt="icon" />
      <h1>Layout Generator</h1>
      <svg width="65" height="65">
        <polyline points="65, 0, 65, 65, 0, 0" fill="white"></polyline>
        <a href="https://github.com/shah59" target="_blank">
          <image xlinkHref={github} width="35" height="35" x="30" y="5" />
        </a>
      </svg>
    </header>
  );
}
