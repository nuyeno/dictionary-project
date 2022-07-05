import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="sunrise" />
        </main>
        <footer>
          <a
            href="https://github.com/nuyeno/dictionary-project"
            className="footer-link"
            target="_blank"
            rel="noreferrer"
          >
            Coded
          </a>{" "}
          by Naomi Uyeno
        </footer>
      </div>
    </div>
  );
}

export default App;
