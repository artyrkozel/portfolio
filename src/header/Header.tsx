import React from "react";
import styles from './header.module.css'
import Nav from "../nav/Nav";
import logo from './../common/img/logo.png'

const navBarStyles = {
    backgroundColor: "#fff",
};
const Header = () => {
    return (
        <div className={styles.header}>
            <div className="container">
                <div className="navbar navbar-expand-lg navbar-light" style={navBarStyles}>
                    <a href="" className="navbar-brand">
                        <img src={logo} alt=""/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Nav />
                </div>
            </div>
            </div>
    )
}

export default Header