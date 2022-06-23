import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for definition of ${keyword}...`);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div>
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="search a word.."
          autoFocus="on"
          autoComplete="off"
          onChange={handleKeywordChange}
        />
      </form>
    </div>
  );
}
