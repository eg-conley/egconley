import './App.css';
import stamps from './assets/stamps.png';
import computer from './assets/computer.png';

function App() {
  return (
    <div>

      <div className="navbar">
        <a href="#about">about</a>
        <a href="#experience">experience</a>
        <a href="#projects">projects</a>
        <a href="#artdesign">art and design</a>
        <a href="#contact">contact</a>
      </div>

      <div id="about">
        <div className="profile-img"><img width="300" src={stamps}></img></div>
        <div className="profile-text">
          <h1>ELLA GRACE CONLEY</h1>
          <p>Hello! I am currently a Junior studying Computer Engineering at Boston University. I have background in both software and hardware, but have a particular interest in software. Write more about myself to fill this out later</p>
          <div className="skills">
            <img width="55" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png" />
            <img width="55" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png" />
            <img width="45" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/640px-CSS3_logo_and_wordmark.svg.png" />
            <img width="50" src="https://banner2.cleanpng.com/20180810/fvl/6bd4cdb9e3c7f6de90a42593ee8817a1.webp" />
            <img width="65" src="https://www.svgrepo.com/show/374163/verilog.svg" />
            
          </div>
        </div>

      </div>


      <div id="experience">
        <h2>EXPERIENCE</h2>
        <div className="job">
          <h3>Job 1</h3>
          <div className="job-info">
          <p>Company name, Location, State</p>
          <p>20xx - 20xx</p>
          </div>
          <ul>
            <li>bullet 1</li>
            <li>bullet 2</li>
            <li>bullet 3</li>
          </ul>
        </div>
        <div className="job">
          <h3>Job 2</h3>
          <div className="job-info">
          <p>Company name, Location, State</p>
          <p>20xx - 20xx</p>
          </div>
          <ul>
            <li>bullet 1</li>
            <li>bullet 2</li>
            <li>bullet 3</li>
          </ul>
        </div>
        <div className="job">
          <h3>Job 3</h3>
          <div className="job-info">
          <p>Company name, Location, State</p>
          <p>20xx - 20xx</p>
          </div>
          <ul>
            <li>bullet 1</li>
            <li>bullet 2</li>
            <li>bullet 3</li>
          </ul>
        </div>
      </div>


      <div id="projects">
        <h2>PROJECTS</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>Project Description</p>
          <a target="_blank" href="https://github.com/"><img id="project-img" width="200" src={stamps} /></a>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Project Description</p>
          <a target="_blank" href="https://github.com/"><img id="project-img" width="200" src={stamps} /></a>
        </div>
        <div className="project">
          <h3>Project 3</h3>
          <p>Project Description</p>
          <a target="_blank" href="https://github.com/"><img id="project-img" width="200" src={stamps} /></a>
        </div>
      </div>

      <div id="artdesign">
        <h2>ART & DESIGN</h2>
        <div className="artwork">
          <h3>Title 1</h3>
          <p>Artwork Description</p>
          <a target="_blank" href="https://github.com/"><img id="project-img" width="200" src={stamps} /></a>
        </div>
        <div className="artwork">
          <h3>Title 2</h3>
          <p>Artwork Description</p>
          <a target="_blank" href="https://github.com/"><img id="project-img" width="200" src={stamps} /></a>
        </div>
        <div className="artwork">
          <h3>Title 3</h3>
          <p>Artwork Description</p>
          <a target="_blank" href="https://github.com/"><img id="project-img" width="200" src={stamps} /></a>
        </div>
      </div>


      <div id="contact">
        <h2>CONTACT ME</h2>
        <div className="socials">
          <a target="_blank" href="mailto:egconley@bu.edu"><img id="email-img" width="50" src="https://banner2.cleanpng.com/20180526/eio/avq7ytjqj.webp" /></a>
          <a target="_blank" href="https://linkedin.com/in/ellaconley"><img id="linkedin-img" width="50" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" /></a>
          <a target="_blank" href="https://github.com/eg-conley"><img id="github-img" width="50" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" /></a>
        </div>

        <div id="chat">
          <form>
            <input type="text" name='user-input' id="questionInput" placeholder="Ask me a question"></input>
            <button type="submit">Submit</button>
          </form>
        </div>

      </div>

    </div>
  );
}

export default App;
