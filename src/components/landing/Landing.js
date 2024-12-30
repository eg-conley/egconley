import React from 'react'
import './landing.css'
import portrait from "../../assets/portrait.jpeg"


const Landing = () => {
    return (
        <div id='landing_section'>

            <div className="image">
                <img src={ portrait } />
                <div className="welcome">
                    <h1>WELCOME</h1>
                    <h1>WELCOME</h1>
                    <h1>WELCOME</h1>
                </div>
            </div>

        </div>
    )
}

export default Landing
