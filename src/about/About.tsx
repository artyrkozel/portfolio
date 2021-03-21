import React from "react";
import styles from './about.module.scss'
import photo from './../common/img/main.jpeg'
import {Fade} from "react-awesome-reveal";

const About = () => {
    return (
        <section className={`${styles.about} ${styles.section}`} id={"about"}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <Fade direction="left">
                        <div className={styles.mainImg}>
                            <img src={photo} alt=""/>
                        </div>
                        </Fade>
                    </div>
                    <div className="col-lg-6">
                        <Fade direction="right">
                        <div className={styles.aboutInner}>
                                <h6>about me</h6>
                                <h2>Who am I</h2>
                            <p>
                                Responsible and motivated Front-end developer, with experience in creating Landing page and SPA using React, Redux, Typescript. I have good analytical skills. I learn easily and with pleasure. I quickly find a common language with people.
                            </p>
                            <div className="row">
                                <div className="col-md-6 col-sm-6">
                                    <ul className={styles.aboutInfo}>
                                        <li>
                                            <h5>Name :</h5>
                                            <span>Artur Kozel</span>
                                        </li>
                                        <li>
                                            <h5>Age:</h5>
                                            <span>25</span>
                                        </li>
                                        <li>
                                            <h5>Country :</h5>
                                            <span>Belarus</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6 col-sm-6">
                                    <ul className={styles.aboutInfo}>
                                        <li>
                                            <h5>Education  :</h5>
                                            <span>Higher</span>
                                        </li>
                                        <li>
                                            <h5>City :</h5>
                                            <span>Minsk</span>
                                        </li>
                                        <li>
                                            <h5>Email :</h5>
                                            <span>artyr_42@mail.ru</span>
                                        </li>
                                    </ul>
                                </div>
                        </div>

                        </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default About