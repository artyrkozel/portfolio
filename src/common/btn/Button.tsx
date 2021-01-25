import React from "react";
import styles from './Btn.module.scss'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
const Btn = (props: any) => {
    return (
        <div className={styles.btn}>
            <a href="#"><span className={styles.text}>{props.title}</span><ArrowForwardIosIcon /><span></span></a>
        </div>
    )
}
export default Btn