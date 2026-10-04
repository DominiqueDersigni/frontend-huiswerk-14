import React from 'react';
import {NavLink} from 'react-router-dom';

function Navigation() {
    return (
        <nav className="navigation-bar">
            <ul>
                <li><NavLink to="/">Homepage</NavLink></li>
                <li><NavLink to="/newblogpost">New blogpost</NavLink></li>
                <li><NavLink to="/overview">Overview</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navigation;