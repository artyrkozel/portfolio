import React from "react";
import styles from './nav.module.scss'

import { HashLink as Link} from 'react-router-hash-link';
const Nav = () => {
    return (
        <div className={styles.nav}>
            <Link

                to="#main"

                smooth={true}


            >Home</Link>
            <Link

                to="#skills"

                smooth={true}


            >Skills</Link>
            <Link

                to="#projects"

                smooth={true}


            >Projects</Link>
        </div>
    )
}

export default Nav