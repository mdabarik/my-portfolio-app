import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const NavScrolLinks = () => {
    return (
        <>
            <li className='uppercase'>
                <Link to="technical-skills" offset={550} smooth={true} duration={500}>
                    Technical Skills
                </Link>
            </li>
            <li className='uppercase'>
                <Link to="projects" offset={-20} smooth={true} duration={500}>
                    Projects
                </Link>
            </li>
            <li className='uppercase'>
                <Link to="contact-me" offset={-20} smooth={true} duration={500}>
                    Contact Me
                </Link>
            </li>
        </>
    );
};

export default NavScrolLinks;