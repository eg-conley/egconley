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
                    <Link to="/moreart"><img src={Takeout}/></Link>
                </div>

                <div className="art_item">
                    <Link to="/moreart"><img src={Mosaic}/></Link>
                </div>

                <div className="art_item">
                    <Link to="/moreart"><img src = {Hand}/></Link>
                </div>

                <div className="art_item">
                    <Link to="/moreart"><img className="still" src={Still}/></Link>
                </div>

                <div className="art_item">
                    <Link to="/moreart"><img src={Ocean}/></Link>
                </div>

                <div className="art_item">
                    <Link to="/moreart"><img/></Link>
                </div>
            </div>

        </div>
    )
}

export default Art