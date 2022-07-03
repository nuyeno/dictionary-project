import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [definition, setDefinition] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setDefinition(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="wordSearch">
        <section>
          <p>What word would you like to look up?</p>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search a word"
              autoFocus="on"
              autoComplete="off"
              onChange={handleKeywordChange}
            />
          </form>
        </section>
        <Results results={definition} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
