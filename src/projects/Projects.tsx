import React from "react";
import styles from './projects.module.scss'
import Project from "./project/Project";
import Title from "../common/headingTitle/Title";
import first from './../common/img/01.png'
import second from './../common/img/02.png'
import third from './../common/img/03.png'


const Projects = () => {
    return (
        <section className={`${styles.projectsBlock} ${styles.section}`} id={"projects"}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row justify-content-center">
                            <Title title={'My projects'} subTitle={'projects'}/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Project bg={first} id={'0'} title={'TodoList'}/>
                    <Project bg={second} id={'1'} title={'SocialNet'}/>
                    <Project bg={third} id={'2'} title={'Movie search'}/>
                    <Project bg={third} id={'3'} title={'HTML coding'}/>
                </div>
            </div>
        </section>


    )
}

export default Projects