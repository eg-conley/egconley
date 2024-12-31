import React from 'react'
import './projects.css'
import Button from '../Button.js'
import {Link} from "react-router-dom"
import DogPound from "../../assets/dogpound.jpeg"
import MorseCode from "../../assets/morsecode.png"
import Chase from "../../assets/chase.png"
import Website from "../../assets/website.png"
import LieDetector from "../../assets/liedetector.png"


const Projects = () => {
    return (
        <div id='projects_section'>

            <div className="projects_header">
                <h1>WHAT I HAVE <em>ENGINEERED</em></h1>
                <Link to="/moreprojects"><Button>MORE</Button></Link>
            </div>

            <div className="projects_container">
                <div className="projects_item">
                    <a href="https://github.com/eg-conley/EC311_project" target="_blank" rel="noopener noreferrer"><img className="morse" alt="project" src={MorseCode}/></a>
                </div>

                <div className="projects_item">
                    <a href="https://github.com/eg-conley/hackhardware2024" target="_blank" rel="noopener noreferrer"><img alt="project" src={Chase}/></a>
                </div>

                <div className="projects_item">
                    <a href="https://github.com/eg-conley/egconley" target="_blank" rel="noopener noreferrer"><img alt="project" src={Website}/></a>
                </div>

                <div className="projects_item">
                    <a href="https://github.com/eg-conley/dogpound" target="_blank" rel="noopener noreferrer"><img alt="project" src={DogPound}/></a>
                </div>

                <div className="projects_item">
                    <a href="https://github.com/eg-conley/liedetector/tree/main" target="_blank" rel="noopener noreferrer"><img alt="project" src={LieDetector}/></a>
                </div>

                <div className="projects_item">
                    
                </div>
            </div>

        </div>
    )
}

export default Projects