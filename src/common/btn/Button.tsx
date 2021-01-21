import React from "react";
import styles from './Btn.module.scss'

const Btn = (props: any) => {
    return (
        <div className={styles.btn}>
            <a href="#"><span className={styles.text}> View works</span><span></span></a>
        </div>
    )
}
export default Btn