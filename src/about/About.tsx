import React from "react";
import styles from './about.module.scss'
import photo from './../common/img/main.jpeg'

const About = () => {
    return (
        <section className={`${styles.about} ${styles.section}`} id={"about"}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className={styles.mainImg}>
                            <img src={photo} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={styles.aboutInner}>
                            <h6>about me</h6>
                            <h2>I am here with 10 years of user experience</h2>
                            <p>
                                I prevent your loss of time and indecision in the works I have taken and the projects I have done and offer the best solution. Many of my customers and brands express their satisfaction with working with me.We can appeal to a huge audience and grow your business.
                            </p>
                            <div className="row">
                                <div className="col-md-6 col-sm-6">
                                    <ul className={styles.aboutInfo}>
                                        <li>
                                            <h5>Name :</h5>
                                            <span>Artur Kozel</span>
                                        </li>
                                        <li>
                                            <h5>Date of birth:</h5>
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
                                            <h5>Education :</h5>
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
                    </div>
                </div>
            </div>
        </section>

    )
}
export default About