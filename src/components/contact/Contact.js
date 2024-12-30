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