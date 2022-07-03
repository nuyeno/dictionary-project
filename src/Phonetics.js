import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="phonetics">
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        Listen
        <i className="fa-regular fa-circle-play"></i>
      </a>
      <span>{props.phonetics.text}</span>
    </div>
  );
}
