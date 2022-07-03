import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="sunrise" />
        </main>
        <footer>
          Coded by Naomi Uyeno
        </footer>
      </div>
    </div>
  );
}

export default App;
