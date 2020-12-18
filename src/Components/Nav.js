import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Nav(props) {
    return (
        <div className="container">
            <Link className="navbar-brand" to="/">
                MERN Auth
            </Link>
            <button
                className="navbar-toggle"
                type="button"
                data-toggle="#navbarsExample07"
                data-target="#navbarsExample07"
                aria-controls="#navbarExample07"
                aria-label="Toggle Navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample07">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/">
                            Home
                        </NavLink>
                        <NavLink className="nav-link" exact to="/about">
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;
