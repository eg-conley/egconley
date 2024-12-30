import React from 'react'
import './art.css'
import { Link } from 'react-router-dom'
import Button from '../Button'

import Takeout from "../../assets/takeout.JPG"
import Mosaic from "../../assets/mosaic.jpeg"
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
                <a href="" target="_blank"><img src={Takeout}/></a>
                </div>

                <div className="art_item">
                <a href="" target="_blank"><img src={Mosaic}/></a>
                </div>

                <div className="art_item">
                <a href="https://github.com/eg-conley" target="_blank"></a>
                </div>

                <div className="art_item">
                <a href="https://github.com/eg-conley" target="_blank"><img src={Hand}/></a>
                </div>

                <div className="art_item">
                <a href="https://github.com/eg-conley" target="_blank"><img src={Ocean}/></a>
                </div>

                <div className="art_item">
                <a href="https://github.com/eg-conley" target="_blank"></a>
                </div>

          </div>

        </div>
    )
}

export default Art