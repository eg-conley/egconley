import './App.css';
import stamps from './assets/stamps.png';
import computer from './assets/computer.png';

function App() {
  return (
    <div className="page">
          <a href="./About">
            <img className="logo" src={stamps}></img>
          </a>
        <ul className="navbar">
          <li className="pagenames"><a href="./About">about</a></li>
          <li className="pagenames"><a href="./Projects">projects</a></li>
          <li className="pagenames"><a href="./Experience">experience</a></li>
          <li className="pagenames"><a href="./ArtDesign">art and design</a></li>
          <li className="pagenames"><a href="./Contact">contact</a></li>
        </ul>
        <div>
          <h1 id="name">ELLA GRACE CONLEY</h1>
          <p id="tagline">engineer. word two. word three.</p>
        </div>
        <div>
          <p className="go">let's go</p>
          <p className="arrow"></p>
        </div>
        <img className="computer" src={computer}></img>
        <div className="outerbox">
          <div className="innerbox>"></div>
        </div>
      </div>
  );
}

export default App;
