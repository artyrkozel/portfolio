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
                    <div className="row justify-content-center">
                        <Title title={'My projects'} subTitle={'projects'}/>
                    </div>
                    <div className="row">
                        <div className="projects">
                            <div className="row justify-content-around">
                                <Project style={socialNetwork} img={cre} id={'0'} />
                                <Project style={socialNetwork} img={todo} id={'1'} />
                                <Project style={socialNetwork} img={todo} id={'2'}/>
                            </div>
                        </div>
                    </div>

                </div>
        </section>


    )
}

export default Projects