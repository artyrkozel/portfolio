import React from "react";
import styles from './main.module.scss'
import Particles from 'react-particles-js'
import {Fade} from "react-awesome-reveal";
import ReactTypingEffect from 'react-typing-effect';
import photo from './../common/img/origineal.jpg'
import {Link} from "react-scroll";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const Main = () => {
    const params = {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            }
        }
    }
    return (
        <main className={styles.mainBlock} id={"main"}>
            <div>
                <Particles className={styles.particles} params={params}/>
            </div>
            <div className="container">
                <div className={`${"row align-items-center justify-content-around"} ${styles.row}`}>
                    <div className="col-lg-7 col-xl-6 col-md-10">
                        <div className={styles.contentWr}>
                            <Fade direction="left">
                                <span className={styles.subTitle}>Hi there</span>
                                <h1 className={styles.title}>My name is Artur Kozel</h1>
                                <ReactTypingEffect text="Frontend developer" className={styles.subTitle}/>
                                <Link
                                    activeClass="active"
                                    className={`${styles.mainBtn} ${styles.btn4}`}
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={1000}
                                >
                                    Click me
                                </Link>
                            </Fade>
                        </div>
                    </div>
                    <div className="col-lg-5 col-xl-6 col-md-12">
                        <div className={styles.heroImg}>
                            <div className={styles.borderOuter}>
                                <div className={styles.borderInner}>
                                    <img src={photo} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>


    )
}

export default Main