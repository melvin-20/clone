import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, Button } from '@material-ui/core';

const Header = () => {
    return (
        <div className="header">
            <Link to='/' className="header__logo">
                
            </Link>

            <div className="header__center">
                <input type="text" placeholder="Search Spaces" className="searchInput" />
                <Link to='/search' className="searchButton">
                  <SearchIcon />
                </Link>
            </div>

            <div className="header__right">
                <Link to='/signup' className="header__button">
                    <Button>Sign Up</Button>
                </Link>
                <Link to='/login' className="header__button">
                    <Button>Login</Button>
                </Link>
                <Link to='/host' className="header__button">
                    <Button>List Your Space</Button>
                </Link>
                <div className="header__language">
                    <LanguageIcon />
                    <ExpandMoreIcon />
                </div>
                <Avatar className="header__avatar" />
            </div>
        </div>
    );
};

export default Header;
