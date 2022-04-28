import { Link } from 'react-router-dom';
import WalletAddress from '../components/WalletAddress';

const Guide = () => {
  return (
    <main className="App">
      <header>
        <Link to="/" className="home-link">
          <div className="header-titles">
            <h1>💣🐞🪳🪲 Killing Bugs 🐝🐁🐉</h1>
            <p>Only you can save us from Bugs</p>
          </div>
        </Link>
      </header>

      <div className="score-board-container">
        <h3>How to play</h3>
        
        <div>
          <span className="help">
            Click as many Bugs as you can within 15 seconds!
          </span>
        </div>
        <WalletAddress />
      </div>
    </main>
  );
};

export default Guide;