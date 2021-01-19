import React from "react";
import styles from './skills.module.css'
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={styles.skillBlock}>
            <div className={`${styleContainer.container} ${styles.skillContainer}`}>
                <h2>Skills</h2>
                <div className={styles.skills}>
                    <Skill number={'01'} title={'Js'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}/>
                    <Skill number={'02'} title={'HTML'} description={'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}/>
                    <Skill number={'03'} title={'CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}/>
                    <Skill number={'04'} title={'CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit'}/>

                </div>
            </div>

        </div>
    )
}

export default Skills