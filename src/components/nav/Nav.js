import React from 'react'
import './nav.css'

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
            <a onClick={() => handleClickScroll('about_section')}>about</a>
            <a onClick={() => handleClickScroll("experience_section")}>experience</a>
            <a onClick={() => handleClickScroll("projects_section")}>projects</a>
            <a onClick={() => handleClickScroll("art_section")}>art & design</a>
            <a onClick={() => handleClickScroll("contact_section")}>contact</a>
        </div>
    )
}

export default Nav