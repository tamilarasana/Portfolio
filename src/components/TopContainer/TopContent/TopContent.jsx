import React from 'react';
import { Link } from 'react-scroll';
import "./TopContent.css";

const TopContent = () =>  {
    return (
        <div className='topcontent'>
            <div className='topcontent_container'>
                <h1>Mr.Tamilarasan </h1>
                <p>Full Stack Developer</p>
                <a href='www.google.com'>
                    <button className='topcontent_downloadbutton'>Download CV</button>
                </a>
                <Link  to="projects" smooth={true} duration={500}>
                    <button  className='topcontent_workbutton'>My Work</button>
                </Link>
            </div> 
        </div>
    );
}

export default TopContent;