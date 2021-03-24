import React from "react";
import styles from './Btn.module.scss'
import {NavLink} from "react-router-dom";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Btn = (props: any) => {
    return (
        <NavLink to={`/portfolio/new/` + props.id} className={`${styles.maiBtn} ${styles.btn5}`}>
            {props.title}
            <ArrowForwardIcon />
        </NavLink>

    )
}
export default Btn