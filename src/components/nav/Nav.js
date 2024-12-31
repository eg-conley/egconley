import React from 'react'
import './nav.css'
import Button from '../Button'

const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

const Nav = () => {
    return (
        <div className='navbar'>

            <h1>ELLA CONLEY</h1>
            <Button onClick={() => handleClickScroll('about_section')}>about</Button>
            <Button onClick={() => handleClickScroll("experience_section")}>experience</Button>
            <Button onClick={() => handleClickScroll("projects_section")}>projects</Button>
            <Button onClick={() => handleClickScroll("art_section")}>art & design</Button>
            <Button onClick={() => handleClickScroll("contact_section")}>contact</Button>
            
        </div>
    )
}

export default Nav