import { Link } from '@mui/material';
import React from 'react';
import '../layout/Footer.css';
import Git from '../assets/git.png';
import Linkedin from '../assets/linkedin.png';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-icons">
                <Link href="https://github.com/esdrasli" target="_blank" rel="noopener noreferrer" className="footer-icon">
                    <img src={Git} alt="Netflix Logo" className="footer-logo" />
                </Link>
                <Link href="https://www.linkedin.com/in/natanael-esdras" target="_blank" rel="noopener noreferrer" className="footer-icon">
                    <img src={Linkedin} alt="Netflix Logo" className="footer-logo" />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;
