import React from 'react'
import './art.css'
import {Link} from 'react-router-dom'
import Button from '../Button'
import Takeout from "../../assets/takeout.JPG"
import Mosaic from "../../assets/mosaic.jpeg"
import Still from "../../assets/still.jpeg"
import Hand from "../../assets/hand.jpeg"
import Ocean from "../../assets/ocean.png"

const Art = () => {
    return (
        <div id='art_section'>

            <div className="art_header">
                <Link to="/moreart"><Button>MORE</Button></Link>
                <h1><em>ARTISTIC</em> ENDEAVORS</h1>
            </div>
      
            <div className="art_container">
                <div className="art_item">
                    <Link to="/moreart"><img alt="art project" src={Takeout}/></Link>
                </div>

                <div className="art_item">
                    <Link to="/moreart"><img alt="art project"src={Mosaic}/></Link>
                </div>

                <div className="art_item">
                    <Link to="/moreart"><img alt="art project"src = {Hand}/></Link>
                </div>

                <div className="art_item">
                    <Link to="/moreart"><img alt="art project" className="still" src={Still}/></Link>
                </div>

                <div className="art_item">
                    <Link to="/moreart"><img alt="art project" src={Ocean}/></Link>
                </div>

                <div className="art_item">
                    <Link to="/moreart"></Link>
                </div>
            </div>

        </div>
    )
}

export default Art