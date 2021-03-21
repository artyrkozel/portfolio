import React from "react";
import styles from './projects.module.scss'
import Project from "./project/Project";
import Title from "../common/headingTitle/Title";
import todo from '././../common/img/todo.png'
import site from './../common/img/site.png'
import social from './../common/img/social.png'
import demo from './../common/img/demo.png'
const Projects = () => {
    return (
        <section className={`${styles.projectsBlock} ${styles.section}`} id={"projects"}>
                <div className="container">
                    <div className="row justify-content-center">
                        <Title title={'My projects'} subTitle={'projects'}/>
                    </div>
                    <div className="row">
                        <div className="projects">
                            <div className="row justify-content-around">
                                <Project  img={demo} id={'0'} title={'Вертска'}/>
                                <Project  img={social} id={'1'} title={'Соц. сеть'}/>
                                <Project  img={todo} id={'2'} title={'Todo List'}/>
                            </div>
                        </div>
                    </div>

                </div>
        </section>


    )
}

export default Projects