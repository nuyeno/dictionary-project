import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"><strong>Dictionary</strong></header>
        <main>
          <Dictionary />
        </main>
        <footer>
          Coded by Naomi Uyeno
        </footer>
      </div>
    </div>
  );
}

export default App;
