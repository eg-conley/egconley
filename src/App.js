import React from "react";
import './App.css';
import stamps from './assets/stamps.png';
import profilePhoto from "./assets/IMG_1063.jpeg"
import styled from "styled-components";
import testPhoto from "./assets/Unknown.jpeg"
import emailDrawing from "./assets/email.png"
import linkedinDrawing from "./assets/linkedin.png"
import githubDrawing from "./assets/github.png"
import takeoutArt from "./assets/takeout.JPG"
import mosaicArt from "./assets/mosaic.jpeg"
import handArt from "./assets/hand.jpeg"
import sophomoreArt from "./assets/soph.png"
import dogpoundProject from "./assets/dogpound.jpeg"
import morsecodeProject from "./assets/morsecode.png"
import chaseProject from "./assets/chase.png"
import websiteProject from "./assets/website.png"
import liedetectorProject from "./assets/liedetector.png"
import {Link} from "react-router-dom"
import Routing from './Routing.js';



const Button = styled.button`
  color: #ffffff;
  font-family: "Quicksand";
  font-size: 25px;
  font-weight: 300;
  letter-spacing: 5px;
  elevation: 0;
  background-color: #003Cd7;
  padding: 0px 30px;
  border-radius: 10px;

  border: 1;
  border-color: #003Cd7;
  border-style: solid;
  cursor: pointer;
  transition: ease background-color 500ms;
  &:hover {
    color: #003Cd7; 
    background-color:rgba(0, 0, 0, 0);
  }
`;

const handleClickScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};


function App() {
  return (

    <div>

      <div className="navbar">
        <h1>ELLA CONLEY</h1>
        <a onClick={() => handleClickScroll("about")}>about</a>
        <a onClick={() => handleClickScroll("experience")}>experience</a>
        <a onClick={() => handleClickScroll("projects")}>projects</a>
        <a onClick={() => handleClickScroll("artdesign")}>art & design</a>
        <a onClick={() => handleClickScroll("footer")}>contact</a>
      </div>

      <div id="landing">
        <div className="image-container">
          <img src={profilePhoto} />
          <div className="welcome-overlay">
            <h1>WELCOME</h1>
            <h1>WELCOME</h1>
            <h1>WELCOME</h1>
          </div>
        </div>
      </div>

      <div id="about">
        <div className="profile-header">
          <h1>HI, I AM <em>ELLA CONLEY!</em></h1>
        </div>
        <div className="profile-text">
          <p>I am currently a junior studying Computer Engineering at Boston University. 
            My fascination with the world-transforming ability of technology, especially as it intersects with art, 
            began at a young age playing with handheld gaming consoles like my LeapFrog or Gameboy, and later with 
            web games. This manifests in my gravitation towards game development and a drive to absorb new information 
            in order to excel in my fields. I aim to contribute to streamlined, immersive experiences and digital connectivity 
            with software, hardware, and everything in between.</p>
          <p>Born in Shaoyang, China but raised in the Chicago suburbs, I had a unique upbringing as an adoptee and have developed 
            a passion for sharing my experiences and inspiring connections through niche similarities. Other interests include staying 
            active, which often includes going to the gym, playing soccer, and (recently) getting back into skiing. As mentioned, I cherish 
            the impact of art around me and can often be found with headphones on listening to my favorite artists on repeat or frequenting
             art museums. Some long term goals include moving back to Chicago, Illinois to work in the city. Nothing beats the lively, 
             invigorating environment of a place so close to the beautiful Lake Michigan. Later down the road, I would love to pursue 
             an MBA and continue my education.
          </p>
        </div>
      </div>


      <div id="experience">
        <div className="experience-header">
          <a href="https://drive.google.com/file/d/1b_x_7BLYpmb2AcGnp33cmh4YFfCXjg_M/view?usp=sharing" target="_blank"><Button>RESUME</Button></a>
          <h1>MY <em>EXPERIENCE</em> AND <em>SKILLS</em></h1>
        </div>
    
        <div className="job">
          <h3>Student Supervisor</h3>
          <div className="job-info">
          <p>Boston University Fitness and Recreation Center | Boston, MA</p>
          <p>Sep 2022 - present</p>
          </div>
          <ul>
            <li>•	Provide exceptional customer service by addressing 250+ operational inquires weekly resulting in a measurable increase in patron satisfaction and engagement with facility programs</li>
            <li>•	Assist in creating productive and collaborative environment through training and oversight of 80+ student staff</li>
          </ul>
        </div>
        <div className="job">
          <h3>Secretary</h3>
          <div className="job-info">
          <p>Boston University International Adoptee Club | Boston, MA</p>
          <p>Sep 2022 - present</p>
          </div>
          <ul>
            <li>•	Consult with current leadership to ensure seamless transition to role of President in preparation to lead initiatives prioritizing inclusivity and community engagement</li>
            <li>•	Assist outreach strategies that have previously increased club participation by 50%</li>
            <li>•	Coordinate and manage logistics for meetings and events serving 10+ participants</li>
          </ul>
        </div>
        <div className="job">
          <h3>Undergraduate Laboratory Assistant</h3>
          <div className="job-info">
          <p>Boston University ECE Department | Boston, MA</p>
          <p>Sep - Dec 2024</p>
          </div>
          <ul>
            <li>•	Demonstrated strong C++ knowledge, explaining challenging concepts to 20+ students enhancing understanding</li>
            <li>•	Assessed and debugged student code to provide resolutions and ensure comprehension of lab problems</li>
            <li>•	Produced detailed homework solutions weekly; graded and provided tailored feedback on 70+ assignments</li>
          </ul>
        </div>
        <div className="skills">
            <img width="55" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png" />
            <img width="55" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png" />
            <img width="45" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/640px-CSS3_logo_and_wordmark.svg.png" />
            <img width="100" src="https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Symbol.png" />
            <img width="65" src="https://www.svgrepo.com/show/374163/verilog.svg" />
          </div>
      </div>
  

      <div id="projects">
        <div className="projects-header">
          <h1>WHAT I HAVE <em>ENGINEERED</em></h1>
          <Link to="/moreprojects"><Button>MORE</Button></Link>
        </div>

        <div className="project-item-container">

          <div className="project-item">
           <a href="https://github.com/eg-conley/EC311_project" target="_blank"><img className="morse" src={morsecodeProject}/></a>
          </div>

          <div className="project-item">
           <a href="https://github.com/eg-conley/hackhardware2024" target="_blank"><img className="morse" src={chaseProject}/></a>
          </div>

          <div className="project-item">
           <a href="https://github.com/eg-conley/egconley" target="_blank"><img src={websiteProject}/></a>
          </div>

          <div className="project-item">
           <a href="https://github.com/eg-conley/dogpound" target="_blank"><img src={dogpoundProject}/></a>
          </div>

          <div className="project-item">
           <a href="https://github.com/eg-conley/liedetector/tree/main" target="_blank"><img src={liedetectorProject}/></a>
          </div>

          <div className="project-item">
           <a href="https://github.com/eg-conley" target="_blank"></a>
          </div>
          
        </div>
  
      </div>

      <div id="artdesign">
        <div className="artdesign-header">
          <Link to="/moreartdesign"><Button>MORE</Button></Link>
          <h1><em>ARTISTIC</em> ENDEAVORS</h1>
        </div>
      
         <div className="art-item-container">

          <div className="art-item">
           <a href="" target="_blank"><img src={takeoutArt}/></a>
          </div>

          <div className="art-item">
           <a href="" target="_blank"><img src={mosaicArt}/></a>
          </div>

          <div className="art-item">
           <a href="https://github.com/eg-conley" target="_blank"></a>
          </div>

          <div className="art-item">
           <a href="https://github.com/eg-conley" target="_blank"><img src={handArt}/></a>
          </div>

          <div className="art-item">
           <a href="https://github.com/eg-conley" target="_blank"><img src={sophomoreArt}/></a>
          </div>

          <div className="art-item">
           <a href="https://github.com/eg-conley" target="_blank"></a>
          </div>

          </div>
          
        </div>


      <div id="footer">
        <h1>CONTACT ME</h1>
        <div className="socials">
          <a target="_blank" href="mailto:egconley@bu.edu"><img id="email-img" width="75" src={emailDrawing} /></a>
          <a target="_blank" href="https://linkedin.com/in/ellaconley"><img id="linkedin-img" width="75" src={linkedinDrawing} /></a>
          <a target="_blank" href="https://github.com/eg-conley"><img id="github-img" width="75" src={githubDrawing} /></a>
        </div>
        
        <div id="chat">
          <form>
            <input type="text" name='user-input' id="questionInput" placeholder="ASK ME A QUESTION"></input>
            <Button type="submit">SUBMIT</Button>
          </form>
        </div>
        <p>made with &lt;3</p>

      </div>

    </div>

  );
}

export default App;
