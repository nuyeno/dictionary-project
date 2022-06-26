import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [definition, setDefinition] = useState(null);

  function handleResponse(response) {
    setDefinition(response.data[0]);
  }
  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="wordSearch">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search a word"
          autoFocus="on"
          autoComplete="off"
          onChange={handleKeywordChange}
        />
      </form>
      <Results results={definition} />
    </div>
  );
}
