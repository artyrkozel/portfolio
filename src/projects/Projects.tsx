import React from "react";
import placholder from './../common/img/placholder.png'
import styles from './projects.module.css'
import Project from "./project/Project";
import cre from './../common/img/net.jpg'


const Projects = () => {
    const socialNetwork = {
        backgroundImage: `url(${cre})`
    }
    return (
        <div className={styles.projectsBlock}>
            <div className="container">
                <div className={styles.title}>
                    <h2>Projects</h2>
                </div>
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