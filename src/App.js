import React from "react";
import './App.css';
import Nav from './components/nav/Nav'
import Landing from './components/landing/Landing'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Art from './components/art/Art'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <>
        <Nav/>
        <Landing/>
        <About/>
        <Experience/>
        <Projects/>
        <Art/>
        <Contact/>
    </>
  )
}

export default App





// import stamps from './assets/stamps.png';
// import profilePhoto from "./assets/IMG_1063.jpeg"
// import styled from "styled-components";
// import testPhoto from "./assets/Unknown.jpeg"
// import emailDrawing from "./assets/email.png"
// import linkedinDrawing from "./assets/linkedin.png"
// import githubDrawing from "./assets/github.png"
// import takeoutArt from "./assets/takeout.JPG"
// import mosaicArt from "./assets/mosaic.jpeg"
// import handArt from "./assets/hand.jpeg"
// import sophomoreArt from "./assets/soph.png"
// import dogpoundProject from "./assets/dogpound.jpeg"
// import morsecodeProject from "./assets/morsecode.png"
// import chaseProject from "./assets/chase.png"
// import websiteProject from "./assets/website.png"
// import liedetectorProject from "./assets/liedetector.png"
// import {Link} from "react-router-dom"
// import Routing from './Routing.js';



// const Button = styled.button`
//   color: #ffffff;
//   font-family: "Quicksand";
//   font-size: 25px;
//   font-weight: 300;
//   letter-spacing: 5px;
//   elevation: 0;
//   background-color: #003Cd7;
//   padding: 0px 30px;
//   border-radius: 10px;

//   border: 1;
//   border-color: #003Cd7;
//   border-style: solid;
//   cursor: pointer;
//   transition: ease background-color 500ms;
//   &:hover {
//     color: #003Cd7; 
//     background-color:rgba(0, 0, 0, 0);
//   }
// `;

// const handleClickScroll = (id) => {
//   const element = document.getElementById(id);
//   if (element) {
//     element.scrollIntoView({ behavior: "smooth" });
//   }
// };

//     <div>

//       <div className="navbar">
//         <h1>ELLA CONLEY</h1>
//         <a onClick={() => handleClickScroll("about")}>about</a>
//         <a onClick={() => handleClickScroll("experience")}>experience</a>
//         <a onClick={() => handleClickScroll("projects")}>projects</a>
//         <a onClick={() => handleClickScroll("artdesign")}>art & design</a>
//         <a onClick={() => handleClickScroll("footer")}>contact</a>
//       </div>

//       <div id="landing">
//         <div className="image-container">
//           <img src={profilePhoto} />
//           <div className="welcome-overlay">
//             <h1>WELCOME</h1>
//             <h1>WELCOME</h1>
//             <h1>WELCOME</h1>
//           </div>
//         </div>
//       </div>

      // <div id="about">
      //   <div className="profile-header">
      //     <h1>HI, I AM <em>ELLA CONLEY!</em></h1>
      //   </div>
      //   <div className="profile-text">
      //     <p>I am currently a junior studying Computer Engineering at Boston University. 
      //       My fascination with the world-transforming ability of technology, especially as it intersects with art, 
      //       began at a young age playing with handheld gaming consoles like my LeapFrog or Gameboy, and later with 
      //       web games. This manifests in my gravitation towards game development and a drive to absorb new information 
      //       in order to excel in my fields. I aim to contribute to streamlined, immersive experiences and digital connectivity 
      //       with software, hardware, and everything in between.</p>
      //     <p>Born in Shaoyang, China but raised in the Chicago suburbs, I had a unique upbringing as an adoptee and have developed 
      //       a passion for sharing my experiences and inspiring connections through niche similarities. Other interests include staying 
      //       active, which often includes going to the gym, playing soccer, and (recently) getting back into skiing. As mentioned, I cherish 
      //       the impact of art around me and can often be found with headphones on listening to my favorite artists on repeat or frequenting
      //        art museums. Some long term goals include moving back to Chicago, Illinois to work in the city. Nothing beats the lively, 
      //        invigorating environment of a place so close to the beautiful Lake Michigan. Later down the road, I would love to pursue 
      //        an MBA and continue my education.
      //     </p>
      //   </div>
      // </div>


//       <div id="experience">
        // <div className="experience-header">
        //   <a href="https://drive.google.com/file/d/1b_x_7BLYpmb2AcGnp33cmh4YFfCXjg_M/view?usp=sharing" target="_blank"><Button>RESUME</Button></a>
        //   <h1>MY <em>EXPERIENCE</em> AND <em>SKILLS</em></h1>
        // </div>
    
        // <div className="job">
        //   <h3>Student Supervisor</h3>
        //   <div className="job-info">
        //   <p>Boston University Fitness and Recreation Center | Boston, MA</p>
        //   <p>Sep 2022 - present</p>
        //   </div>
        //   <ul>
        //     <li>•	Provide exceptional customer service by addressing 250+ operational inquires weekly resulting in a measurable increase in patron satisfaction and engagement with facility programs</li>
        //     <li>•	Assist in creating productive and collaborative environment through training and oversight of 80+ student staff</li>
        //   </ul>
        // </div>
        // <div className="job">
        //   <h3>Secretary</h3>
        //   <div className="job-info">
        //   <p>Boston University International Adoptee Club | Boston, MA</p>
        //   <p>Sep 2022 - present</p>
        //   </div>
        //   <ul>
        //     <li>•	Consult with current leadership to ensure seamless transition to role of President in preparation to lead initiatives prioritizing inclusivity and community engagement</li>
        //     <li>•	Assist outreach strategies that have previously increased club participation by 50%</li>
        //     <li>•	Coordinate and manage logistics for meetings and events serving 10+ participants</li>
        //   </ul>
        // </div>
        // <div className="job">
        //   <h3>Undergraduate Laboratory Assistant</h3>
        //   <div className="job-info">
        //   <p>Boston University ECE Department | Boston, MA</p>
        //   <p>Sep - Dec 2024</p>
        //   </div>
        //   <ul>
        //     <li>•	Demonstrated strong C++ knowledge, explaining challenging concepts to 20+ students enhancing understanding</li>
        //     <li>•	Assessed and debugged student code to provide resolutions and ensure comprehension of lab problems</li>
        //     <li>•	Produced detailed homework solutions weekly; graded and provided tailored feedback on 70+ assignments</li>
        //   </ul>
        // </div>
        // <div className="skills">
        //     <img width="55" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png" />
        //     <img width="55" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png" />
        //     <img width="45" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/640px-CSS3_logo_and_wordmark.svg.png" />
        //     <img width="100" src="https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Symbol.png" />
        //     <img width="65" src="https://www.svgrepo.com/show/374163/verilog.svg" />
        //   </div>
//       </div>
  

//       <div id="projects">
        // <div className="projects-header">
        //   <h1>WHAT I HAVE <em>ENGINEERED</em></h1>
        //   <Link to="/moreprojects"><Button>MORE</Button></Link>
        // </div>

        // <div className="project-item-container">

        //   <div className="project-item">
        //    <a href="https://github.com/eg-conley/EC311_project" target="_blank"><img className="morse" src={morsecodeProject}/></a>
        //   </div>

        //   <div className="project-item">
        //    <a href="https://github.com/eg-conley/hackhardware2024" target="_blank"><img className="morse" src={chaseProject}/></a>
        //   </div>

        //   <div className="project-item">
        //    <a href="https://github.com/eg-conley/egconley" target="_blank"><img src={websiteProject}/></a>
        //   </div>

        //   <div className="project-item">
        //    <a href="https://github.com/eg-conley/dogpound" target="_blank"><img src={dogpoundProject}/></a>
        //   </div>

        //   <div className="project-item">
        //    <a href="https://github.com/eg-conley/liedetector/tree/main" target="_blank"><img src={liedetectorProject}/></a>
        //   </div>

        //   <div className="project-item">
        //    <a href="https://github.com/eg-conley" target="_blank"></a>
        //   </div>
          
        // </div>
  
//       </div>

//       <div id="artdesign">
        // <div className="artdesign-header">
        //   <Link to="/moreart"><Button>MORE</Button></Link>
        //   <h1><em>ARTISTIC</em> ENDEAVORS</h1>
        // </div>
      
        //  <div className="art-item-container">

        //   <div className="art-item">
        //    <a href="" target="_blank"><img src={takeoutArt}/></a>
        //   </div>

        //   <div className="art-item">
        //    <a href="" target="_blank"><img src={mosaicArt}/></a>
        //   </div>

        //   <div className="art-item">
        //    <a href="https://github.com/eg-conley" target="_blank"></a>
        //   </div>

        //   <div className="art-item">
        //    <a href="https://github.com/eg-conley" target="_blank"><img src={handArt}/></a>
        //   </div>

        //   <div className="art-item">
        //    <a href="https://github.com/eg-conley" target="_blank"><img src={sophomoreArt}/></a>
        //   </div>

        //   <div className="art-item">
        //    <a href="https://github.com/eg-conley" target="_blank"></a>
        //   </div>

        //   </div>
          
//         </div>


//       <div id="footer">
        // <h1>CONTACT ME</h1>
        // <div className="socials">
        //   <a target="_blank" href="mailto:egconley@bu.edu"><img id="email-img" width="75" src={emailDrawing} /></a>
        //   <a target="_blank" href="https://linkedin.com/in/ellaconley"><img id="linkedin-img" width="75" src={linkedinDrawing} /></a>
        //   <a target="_blank" href="https://github.com/eg-conley"><img id="github-img" width="75" src={githubDrawing} /></a>
        // </div>
        
//         <div id="chat">
//           <form>
//             <input type="text" name='user-input' id="questionInput" placeholder="ASK ME A QUESTION"></input>
//             <Button type="submit">SUBMIT</Button>
//           </form>
//         </div>
//         <p>made with &lt;3</p>

//       </div>

//     </div>

//   );
// }

// export default App;




// @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Playfair:ital,opsz,wght@0,5..1200,300..900;1,5..1200,300..900&family=Quicksand:wght@300..700&display=swap');

// * {
//     padding: 0;
//     margin: 0;
//     overflow-x: hidden;
//     overflow-y: scroll;
// }

// .root {
//     background-color: #ffffff;
//     width: 100vw;
//     height: 4460px;
// }

// #footer {
//     width: 100vw;
//     height: 300px;
// }

// /* navigation */
// .navbar {
//     width: 100vw;
//     height: auto;
//     padding-top: 10px;
//     display: flex;
//     justify-content: space-evenly;
//     position: fixed;
//     z-index: 1;
// }

// .navbar h1 {
//     color: #003Cd7;
//     font-family: "Inter";
//     font-size: 25px;
//     letter-spacing: 5px;
//     padding-right: 200px;
// }

// .navbar a {
//     color: #003Cd7;
//     font-family: "Quicksand";
//     font-size: 20px;
//     font-weight: 300;
//     letter-spacing: 5px;
//     text-decoration: none;
// }

// .navbar a:hover {
//     text-decoration: underline;
// }


// /* landing */
// #landing {
//     height: 832px;
//     display: block;
// }

// .image-container {
//     display: block;
//     position: relative;
//     top: 20%;
// }

// .image-container img {
//     width: 500px;
//     height: 500px;
//     border-radius: 50%;
//     display: block;
//     position: relative;
//     left: 15%;
// }

// .welcome-overlay {
//     position: absolute;
//     top: 50%; 
//     left: 50%; 
//     transform: translate(-20%, -50%); 
// }

// .welcome-overlay h1 {
//     color: #003Cd7;
//     font-family: "Inter";
//     font-size: 125px;
//     font-weight: 300;
//     font-style: italic;
//     letter-spacing: 5px;
// }

// #about h1, #experience h1, #projects h1, #artdesign h1, #footer h1 {
    // color: #003Cd7;
    // font-family: "Inter";
    // font-size: 50px;
    // letter-spacing: 5px;
// }

// /* about */
// #about {
//     height: 832px;
//     display: block;
// }

// .profile-header {
//     display: block;
//     position: relative;
// }

// .profile-header h1 {
//     text-align: center;
//     padding: 50px;
// }

// .profile-text {
//     color: #003Cd7;
//     font-family: "Quicksand";
//     font-size: 20px;
//     font-weight: 300;
//     letter-spacing: 5px;

//     height: 500px;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-around;
//     position: relative;
//     padding: 0 100px;
// }

// /* experience */
// #experience {
//     height: 832px;
//     display: block;
// }

// .experience-header {
//     display: flex;
//     justify-content: right;
//     padding: 50px;
// }

// #experience h1 {
//     text-align: right;
// }

// .experience-header a{
//     padding-right: 200px; 
// }

// .experience-header Button{
//     margin-top: 10px; 
// }

// .job {
//     color: #003Cd7;
//     font-family: "Quicksand";
//     font-size: 25px;
//     font-weight: 300;
//     letter-spacing: 5px;
//     padding: 15px;

//     display: block;
//     position: relative;
//     padding: 0 50px;
// }

// .job-info {
//     display: flex;
//     justify-content: space-between;
//     font-size: 20px;
// }

// .job ul {
//     font-size: 15px;
//     line-height: 25px;;
//     margin-left: 20px;
// }

// .skills {
//     display: flex;
//     justify-content: center;
//     padding: 30px;
// }

// .skills img {
//     padding: 25px;
// }

// /* projects*/
// #projects {
//     height: 832px;
//     display: block;
// }

// .projects-header {
//     display: flex;
//     justify-content: left;
//     padding: 50px;
// }

// #projects h1 {
//     text-align: left;
// }

// .projects-header a{
//     padding-left: 250px; 
// }

// .projects-header Button{
//     margin-top: 10px; 
// }

// .project {
//     color: #003Cd7;
//     font-family: "Quicksand";
//     font-size: 25px;
//     font-weight: 300;
//     letter-spacing: 5px;
//     padding: 15px;

//     display: block;
//     position: relative;
//     padding: 0 50px;
// }

// .project a{
//     width: 200px;
//     display: flex;
//     margin-left: auto;
//     margin-right: auto;
// }

// .project-item-container {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     justify-self: center;
//     gap: 20px 100px;
//     position: relative;
// }

// .project-item {
//     width: 300px;
//     height: 300px;
//     background-color:#003Cd7;
//     border-radius: 10px;
//     overflow: hidden;
// }
// .project-item img{
//     object-fit: cover;
//     width: 300px;
//     height: 300px;
// }

// .project-item .morse {
//     object-fit: cover;
//     width: 305px;
//     height: 300px;
// }

// /* art & design */
// #artdesign {
//     height: 832px;
//     display: block;
// }

// .artdesign-header {
//     display: flex;
//     justify-content: right;
//     padding: 50px;

// }

// #artdesign h1 {
//     text-align: right;
// }

// .artdesign-header a{
//     padding-right: 350px; 
// }

// .artdesign-header Button{
//     margin-top: 10px; 
// }

// .artwork {
//     font-family: "Quicksand";
//     font-size: 20px;
//     font-weight:300;
//     letter-spacing:5px;
//     color: #29335C;
// }

// .art-item-container {
//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     justify-self: center;
//     gap: 20px 100px;
//     position: relative;
// }

// .art-item {
//     width: 300px;
//     height: 300px;
//     background-color:#003Cd7;
//     border-radius: 10px;
//     overflow: hidden;
// }
// .art-item img{
//     object-fit: cover;
//     width: 300px;
//     height: 300px;
// }

// /* contact */
// #footer h1 {
//     text-align: center;
//     padding: 10px;
// }

// #footer p {
//     color: #003Cd7;
//     font-family: "Quicksand";
//     font-size: 20px;
//     font-weight: 300;
//     letter-spacing: 5px;

//     display: block;
//     position: relative;
//     text-align: center;
//     padding: 10px 0;
// }

// .socials {
//     display: flex;
//     justify-content: center;
// }

// .socials img {
//     padding: 7px;
// }

// form {
//     display: flex;
//     justify-content: center;
// }

// #chat {
//     padding: 10px;
// }

// #chat input[type="text"] {
//     width: 100%;
//     max-width: 400px;
//     padding: 7px;
//     font-family: "Quicksand";
//     letter-spacing: 5px;
//     font-size: 15px;
//     border: 2px solid #003Cd7;
//     border-radius: 10px;
//     background-color: #fff;
//     color: #003Cd7;
// }

// #chat input[type="text"]:focus {
//     outline: none;
//     border: 2px solid #003Cd7;
//     color: #003Cd7;
// }

// #chat Button {
//     font-size: 15px;
// }

