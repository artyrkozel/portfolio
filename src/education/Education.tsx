import React from "react";
import styles from "./education.module.scss"
import Title from "../common/headingTitle/Title";
import {Fade} from "react-awesome-reveal";

const Education = () => {
    return (
        <section className={`${styles.education} ${styles.section}`}>
            <div className="container">
                <div className="row text-center justify-content-center">
                    <div className="col-md-10">
                        <Fade direction="down" delay={500}>
                            <Title title={'My Education'} subTitle={'Education'}/>
                        </Fade>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className={styles.educationContent}>
                            <div className={styles.timeLine}>
                                <div className={styles.timeLineBlock}>
                                    <div className={styles.cdTimelineImg}>
                                        <span className={styles.icon}></span>
                                    </div>
                                    <Fade direction="down" delay={500}>
                                        <div className={styles.cdTimelineContent}>
                                            <h2 className={styles.title}>bntu</h2>
                                            <p>2013-2018 | Инженер
                                            </p>
                                        </div>
                                    </Fade>
                                </div>
                                <div className={styles.timeLineBlock}>
                                    <div className={styles.cdTimelineImg}>
                                        <span className={styles.icon}></span>
                                    </div>
                                        <div className={styles.cdTimelineContent}>
                                            <Fade direction="up" delay={500}>
                                            <h2 className={styles.title}>it-academy</h2>
                                            <p>Разработка сайтов с использованием HTML5, CSS3, JS</p>
                                            </Fade>
                                        </div>
                                </div>
                                <div className={styles.timeLineBlock}>
                                    <div className={styles.cdTimelineImg}>
                                        <span className={styles.icon}></span>
                                    </div>
                                    <Fade direction="down" delay={500}>
                                        <div className={styles.cdTimelineContent}>
                                            <h2 className={styles.title}>it-incubator</h2>
                                            <p>Разработка SPA на стеке React, Redux, TS
                                            </p>
                                        </div>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Education