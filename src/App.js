import './App.css';

function App() {
  return (
    <div className="page">
          <a href="x">
            <img className="logo" src="/src/assets/stamps.png"></img>
          </a>
        <ul className="navbar">
          <li className="pagenames"><a href="./pages/About.jsx">about</a></li>
          <li className="pagenames"><a href="./pages/Projects.jsx">projects</a></li>
          <li className="pagenames"><a href="./pages/Experience.jsx">experience</a></li>
          <li className="pagenames"><a href="./pages/ArtDesign.jsx">art and design</a></li>
          <li className="pagenames"><a href="./pages/Contact.jsx">contact</a></li>
        </ul>
        <div>
          <h1 id="name">ELLA GRACE CONLEY</h1>
          <p id="tagline">engineer. word two. word three.</p>
        </div>
        <div>
          <p className="go">let's go</p>
          <p className="arrow"></p>
        </div>
        <img className="computer" src="/src/assets/computerv2.png"></img>
        <div className="outerbox">
          <div className="innerbox>"></div>
        </div>
      </div>
  );
}

export default App;
