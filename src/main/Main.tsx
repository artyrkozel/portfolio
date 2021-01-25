import React from "react";
import styles from './main.module.scss'
import Button from "../common/btn/Button";
import Particles from 'react-particles-js'
import { Fade } from "react-awesome-reveal";
import ReactTypingEffect from 'react-typing-effect';
import photo from './../common/img/original.jpg'
import { Link, animateScroll as scroll } from "react-scroll";
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

        <div className={styles.mainBlock} id={"main"}>
            <Particles className={styles.particles} params={params}/>
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-4">
                        <Fade direction="left">
                        <span className={styles.subTitle}>Hi there</span>
                            <h1 className={styles.title}>I am Artur</h1>
                            <ReactTypingEffect text="Frontend developer" className={styles.subTitle}/>
                        </Fade>
                    </div>
                    <Fade direction="right">
                    <div className={`${'col-md-4'} ${styles.photo}`}>
                        <img src={photo} alt=""/>
                    </div>
                    </Fade>
                </div>
                <div className="row">
                    <Button title={"view works"}/>
                </div>
            </div>
        </div>

    )
}

export default Main