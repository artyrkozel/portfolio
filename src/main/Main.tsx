import React from "react";
import styles from './main.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import Title from "../common/headingTitle/Title";
import Button from "../common/btn/Button";

const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className="container">
                {/*<div className={styles.text}>*/}
                {/*    <span>Hi there</span>*/}
                {/*    <h1>I am Artur</h1>*/}
                {/*    <p>Frontend developer</p>*/}
                {/*</div>*/}
                {/*<div className={styles.photo}></div>*/}
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-4">
                        <span className={styles.subTitle}>Hi there</span>
                            <h1 className={styles.title}>I am Artur</h1>
                            <p className={styles.subTitle}>Frontend developer</p>
                    </div>
                    <div className={`${'col-md-4'} ${styles.photo}`}>
                    </div>
                </div>
                <div className="row">
                    <Button />
                </div>
            </div>

        </div>
    )
}

export default Main