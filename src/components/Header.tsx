import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import '../layout/Header.css';
import NetflixLogo from '../assets/Netflix-new-icon.png';

const Header: React.FC = () => {
    return (
        <AppBar position="static" className="header">
            <Toolbar>
                <img src={NetflixLogo} alt="Netflix Logo" className="header-logo" />
                <Typography variant="h6" component={Link} to="/" className="header-title">
                    Natflix
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
