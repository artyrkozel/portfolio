import React from "react";
import styles from './main.module.css'
import styleContainer from './../common/styles/Container.module.css'

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
                    <button type="button" className="btn btn-primary">Главный</button>
                </div>
            </div>

        </div>
    )
}

export default Main