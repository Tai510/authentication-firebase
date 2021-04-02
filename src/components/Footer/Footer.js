import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <nav className='Footer'>
            <Link to='/'>DashBoard</Link>
        </nav>
    )
}

export default Footer;