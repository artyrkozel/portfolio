import React from "react";
import styles from './Btn.module.scss'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {Route, Redirect} from 'react-router-dom'
import {NavLink} from "react-router-dom";
const Btn = (props: any) => {
    let onClick = () => {
        return  alert(props.id)
    }
    return (
        <NavLink to="/new">
            <div className={styles.btn} onClick={onClick}>
                <span className={styles.text}>{props.title}</span>
                <span className={styles.icon}><ArrowForwardIosIcon /></span>
            </div>
        </NavLink>


    )
}
export default Btn