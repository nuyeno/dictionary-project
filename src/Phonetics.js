import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetics);
  return (
    <div className="phonetics">
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <p>{props.phonetics.text}</p>
    </div>
  );
}
