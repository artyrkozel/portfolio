import React from "react";
import placholder from './../common/img/placholder.png'
import styles from './projects.module.scss'
import Project from "./project/Project";
import cre from './../common/img/net.jpg'
import Title from "../common/headingTitle/Title";


const Projects = () => {
    const socialNetwork = {
        backgroundImage: `url(${cre})`
    }
    return (
        <div className={styles.projectsBlock}>
            <div className="container">
                <Title title={'My projects'} subTitle={'projects'}/>
                <div className="projects">
                    <div className="row justify-content-around">
                        <Project style={socialNetwork}/>
                        <Project/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Projects