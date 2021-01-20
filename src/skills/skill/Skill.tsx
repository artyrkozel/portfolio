import React from "react";
import styles from './skill.module.css'

const Skill = (props: any) => {
    return (
        <div className="col-lg-4 col-md-6">
        <div className={styles.skillItem}>
                <div className={styles.body}>
                    <h4>{props.number}</h4>
                    <h5>{props.title}</h5>
                    <span className={styles.description}>{props.description}</span>
                </div>
                <div className={styles.iconNext}>
                    <span></span>
                </div>
                <div className={styles.iconBorder}></div>
            </div>
            </div>

    )
}

export default Skill