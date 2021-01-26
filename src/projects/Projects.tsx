import React from "react";
import styles from './projects.module.scss'
import Project from "./project/Project";
import cre from './../common/img/net.jpg'
import Title from "../common/headingTitle/Title";
import todo from '././../common/img/todo.png'

const Projects = () => {
    const socialNetwork = {
        backgroundColor: '#FFF'
    }
    return (
        <section className={`${styles.projectsBlock} ${styles.section}`} id={"projects"}>
                <div className="container">
                    <Title title={'My projects'} subTitle={'projects'}/>
                    <div className="projects">
                        <div className="row justify-content-around">
                            <Project style={socialNetwork} img={cre}/>
                            <Project style={socialNetwork} img={todo}/>
                            <Project style={socialNetwork} img={todo}/>
                        </div>
                    </div>
                </div>
        </section>


    )
}

export default Projects