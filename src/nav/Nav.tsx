import React from "react";
import styles from './nav.module.scss'


const Nav = () => {
    return (
            <div className={`${"collapse navbar-collapse"} ${styles.menu}`}>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contacts</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contacts</a>
                    </li>
                </ul>
            </div>
    )
}

export default Nav