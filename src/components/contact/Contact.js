import React from 'react'
import './contact.css'
import emailDrawing from "../../assets/email.png"
import linkedinDrawing from "../../assets/linkedin.png"
import githubDrawing from "../../assets/github.png"

const Contact = () => {
    return (
        <div id='contact_section'>

            <h1>CONTACT ME</h1>
            <div className="socials">
                <a target="_blank" href="mailto:egconley@bu.edu"><img id="email-img" width="75" src={emailDrawing} /></a>
                <a target="_blank" href="https://linkedin.com/in/ellaconley"><img id="linkedin-img" width="75" src={linkedinDrawing} /></a>
                <a target="_blank" href="https://github.com/eg-conley"><img id="github-img" width="75" src={githubDrawing} /></a>
            </div>
            <p>made with &lt;3</p>
            
        </div>
    )
}

export default Contact

//         <div id="chat">
//           <form>
//             <input type="text" name='user-input' id="questionInput" placeholder="ASK ME A QUESTION"></input>
//             <Button type="submit">SUBMIT</Button>
//           </form>
//         </div>

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