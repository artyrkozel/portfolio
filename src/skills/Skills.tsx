import React from "react";
import styles from './skills.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/headingTitle/Title";
import { Fade } from "react-awesome-reveal";
import Battery20Icon from '@material-ui/icons/Battery20';
import Battery30Icon from '@material-ui/icons/Battery30';
import Battery50Icon from '@material-ui/icons/Battery50';
import Battery60Icon from '@material-ui/icons/Battery60';
import Battery90Icon from '@material-ui/icons/Battery90';
import BatteryFullIcon from '@material-ui/icons/BatteryFull';
const Skills = () => {
    return (
        <div className={styles.skillBlock} id={"skills"}>
            <div className="container">
                <Fade direction="top-left">
                <Title title={'My skills'} subTitle={'skills'}/>
                </Fade>
                <div className={styles.skills}>
                    <Skill number={'01'} title={'Js'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'} direction={"top-left"} icon={Battery20Icon}/>
                    <Skill number={'02'} title={'HTML'} description={'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'} direction={"top-right"}
                    icon={Battery30Icon}/>
                    <Skill number={'03'} title={'CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'} direction={"top-right"} icon={Battery50Icon}/>
                    <Skill number={'04'} title={'CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'} direction={"bottom-left"} icon={Battery60Icon}/>
                    <Skill number={'04'} title={'CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'} direction={"bottom-right"} icon={Battery90Icon}/>
                    <Skill number={'04'} title={'CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'} direction={"bottom-right"} icon={BatteryFullIcon}/>
                </div>
            </div>

        </div>
    )
}

export default Skills