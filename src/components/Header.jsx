import React from 'react';
import '../styles/styles.css'
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <header className="header">
            <div className="header__container">
                <a className="header__logo">
                    Notes
                </a>
                <nav className="header__menu menu">
                    <ul className="menu__list">
                        <li className="menu__item">
                            <Link to='/main' className="menu__link">Home</Link>
                        </li>
                        <li className="menu__item">
                            <a href="" className="menu__link">About</a>
                        </li>
                    </ul>
                </nav>
                <Link to={props.route} className="header__button">{props.name}</Link>
            </div>
        </header>
    );
};

export default Header;