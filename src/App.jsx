import React from "react";
import './style.css'

function App() {
    return (
      <div class="page">
          <a href="x">
            <img class="logo" src="/src/assets/stamps.png"></img>
          </a>
        <ul class="navbar">
          <li class="pagenames"><a href="x">about</a></li>
          <li class="pagenames"><a href="x">experience</a></li>
          <li class="pagenames"><a href="x">projects</a></li>
          <li class="pagenames"><a href="x">art & design</a></li>
          <li class="pagenames"><a href="x">contact</a></li>
        </ul>
        <div>
          <h1 id="name">ELLA GRACE CONLEY</h1>
          <p id="tagline">engineer. word two. word three.</p>
        </div>
        <div>
          <p class="go">let's go</p>
          <p class="arrow"></p>
        </div>
        <img class="computer" src="/src/assets/computerv2.png"></img>
        <div class="outerbox">
          <div class="innerbox>"></div>
        </div>
      </div>
    );
}

export default App;