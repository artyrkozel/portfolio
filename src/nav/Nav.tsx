import React from "react";
import styles from './nav.module.scss'
import {Link} from "react-scroll";

const Nav = () => {
    return (
        <div className={styles.nav}>
            <Link
                activeClass={styles.active}
                to="#main"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >Home</Link>
            <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >Skills</Link>
            <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
            >Projects</Link>
        </div>
    )
}

export default Nav