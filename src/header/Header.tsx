import React, {useEffect, useState} from "react";
import styles from './header.module.scss'
import logo from './../common/img/logo.png'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "./SideDrawer/SideDrawer";
import {NavLink} from "react-router-dom";


const Header = (props: any) => {
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const [headerShow, setHeaderShow] = useState(false);

    const toggleDrawer = (value: any) => {
        setDrawerOpen(value);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [headerShow]);

    const handleScroll = () => {
        (window.scrollY > 0) ? setHeaderShow(true) : setHeaderShow(false);
    }

    return (<div className="container">
            <AppBar
                position="fixed"
                style={{
                    background: headerShow ? "#fff" : "transparent",
                    padding: " 10px 0px",
                    boxShadow: headerShow ? "0 3px 10px 0 rgba(255, 69, 0, 0.1)" : "none"
                }}
            >
                <Toolbar>
                    <div className={styles.header}>
                        <div className={styles.headerLogo}>
                            <NavLink to={'/portfolio/'}><img src={logo} alt="logo"/></NavLink>
                        </div>
                        <IconButton aria-label="Menu" onClick={() => toggleDrawer(true)}>
                            <MenuIcon style={{color: '#0652DD'}}/>
                        </IconButton>
                    </div>
                    <SideDrawer open={drawerOpen} onClose={(value: boolean) => toggleDrawer(value)}/>
                </Toolbar>
            </AppBar>
        </div>

    )
}

export default Header