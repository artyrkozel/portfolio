import React from "react";
import styles from './nav.module.scss'
import {Link} from "react-scroll";


const Nav = () => {
    return (
        <div className={styles.nav}>
            <Link
                activeClass="active"
                to="main"
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
        // <div className={`${"collapse navbar-collapse"} ${styles.menu}`}>
        //     <ul className="navbar-nav ml-auto">
        //         <li className="nav-item">
        //             <a className="nav-link" href="#">Home</a>
        //         </li>
        //         {/*<li className="nav-item">*/}
        //         {/*    <a className="nav-link" href="#skills">Skills</a>*/}
        //         {/*</li>*/}
        //         <Link
        //             activeClass="active"
        //             to="skills"
        //             spy={true}
        //             smooth={true}
        //             offset={0}
        //             duration={500}
        //         >Skills</Link>
        //         <li className="nav-item">
        //             <a className="nav-link" href="#">Projects</a>
        //         </li>
        //         <li className="nav-item">
        //             <a className="nav-link" href="#">Contacts</a>
        //         </li>
        //         <li className="nav-item">
        //             <a className="nav-link" href="#lol">Contacts</a>
        //         </li>
        //     </ul>
        // </div>
    )
}

export default Nav