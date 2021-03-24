import React from "react";
import styles from './skills.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/headingTitle/Title";
import {Fade} from "react-awesome-reveal";
import Battery20Icon from '@material-ui/icons/Battery20';
import Battery50Icon from '@material-ui/icons/Battery50';
import BatteryFullIcon from '@material-ui/icons/BatteryFull';
import {ProgressLine} from "../common/ProgressBarLine/ProgressBarLine";


const Skills = () => {
    return (
        <section className={`${styles.skillBlock} ${styles.section}`} id={"skills"}>
            <div className="container">
                <Fade direction="down">
                    <Title title={'My skills'} subTitle={'skills'}/>
                </Fade>
                <Fade direction="up">
                    <div className={styles.skills}>
                        <Skill number={'01'} title={'HTML5/CSS3'} direction={"top-left"} icon={Battery20Icon}/>
                        <Skill number={'02'} title={'JavaScript'} direction={"top-right"}
                               icon={Battery50Icon}/>
                        <Skill number={'03'} title={'React/TypeScript'} direction={"top-right"} icon={BatteryFullIcon}/>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <ProgressLine title={'BootStrap'} percent={90}/>
                            <ProgressLine title={'Saas/Less'} percent={80}/>
                            <ProgressLine title={'Responsive web'} percent={80}/>
                        </div>
                        <div className="col-md-3 offset-1">
                            <ProgressLine title={'Rest API(Axios)'} percent={80}/>
                            <ProgressLine title={'ECMAScript 6+'} percent={70}/>
                        </div>
                        <div className="col-md-3 offset-1">
                            <ProgressLine title={'React-router'} percent={90}/>
                            <ProgressLine title={'Hooks'} percent={75}/>
                            <ProgressLine title={'Functional and Class components'} percent={75}/>
                            <ProgressLine title={'Redux, Redux-thunk'} percent={85}/>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>

    )
}

export default Skills