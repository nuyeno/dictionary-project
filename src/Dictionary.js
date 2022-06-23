import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function handleResponse(response) {
    console.log(response.data);
  }
  function search(event) {
    event.preventDefault();
    alert(`Searching for definition of ${keyword}...`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
