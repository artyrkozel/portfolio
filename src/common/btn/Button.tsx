import React from "react";
import styles from './Btn.module.scss'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {NavLink} from "react-router-dom";

const Btn = (props: any) => {

    return (
        <NavLink to={`/portfolio/new/` + props.id}>
            <div className={`${styles.btn}`}>
                <div className={styles.btnWrapper}>
                    <span className={styles.text}>{props.title}</span>
                    <span className={styles.icon}><ArrowForwardIosIcon /></span>
                </div>

            </div>
        </NavLink>


    )
}
export default Btn