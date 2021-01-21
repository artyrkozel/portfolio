import React from "react";
import styles from './projectItem.module.scss'
import placholder from "../../common/img/placholder.png";

const Project = (props: any) => {
    return (
        <div className="col-md-6 text-center">
            <div className={styles.projectItem}>
                <div className={styles.image} style={props.style}>
                    <a href="#" className={styles.btnProject}>Смотреть</a>
                </div>
                <div className={styles.projectDesc}>
                    <h3>Social Network</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...</p>
                </div>
            </div>
        </div>
    )
}

export default Project