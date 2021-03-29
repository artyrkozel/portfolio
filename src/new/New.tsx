import React from "react";
import styles from './new.module.scss'
import {NavLink, useParams} from 'react-router-dom'
import bg from './../common/img/bg.jpg'
import demo1 from './../common/img/demo.png'
import demo2 from './../common/img/demo2.png'
import demo3 from './../common/img/demo3.png'
const arr = [
    {title: 'TodoList',img: demo3, details: {projectName: 'TodoList', stack: 'React, Redux, Typescript', url: 'https://artyrkozel.github.io/todolist/#/todolist/'}, description: 'Создание разных Todo-листов, добавление/удаление/редактирование тасок, использование Material Ui, логинизация (redux form), использование RestApi' },
    {title: 'SocialNet',img: demo2, details: {projectName: 'SocialNet', stack: 'React, Redux, Typescript', url: 'https://artyrkozel.github.io/socialnet/#/socialnet/login'}, description: 'Реализация FLUX-круговорота, создание логинизации с использованием Formik(с валидацией), навигация по странице (react router dom), возможность редактирования профиля, добавление/изменение статуса, подписка на пользователей, отображение списка криптовалют с возможностью фильтрации, общий чат (websocket), дизайн Material-Ui, использование RestApi'},
    {title: 'HTML coding',img: demo1, details: {projectName: 'HTML coding', stack: 'HTML5/CSS3', url: 'https://artyrkozel.github.io/artyrkozel-artyrkozel-artyrkozel-version.github.io/'}, description: 'Адаптивная вертска'}
]

export const New = () => {

    const {id} = useParams<{ id: string }>()
    const data = arr[+id]
    return (
        <main>
            <section className={`${styles.portfolioHeader} ${styles.cont}`} style={{backgroundImage: `url(${bg})`}}>
                <div className='container'>
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                            <div>
                                <h1>{data.title}</h1>
                            </div>
                            <a className={styles.backBtn}>
                                <NavLink to={'/portfolio/'}>back to home</NavLink>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className={`${styles.project} ${styles.cont}`}>
                <div className='container'>
                    <div className="row justify-content-between">
                        <div className="col-md-8">
                            <img className={styles.portfolioImg} src={data.img} alt=""/>
                        </div>
                        <div className="col-lg-4">
                            <div className={styles.headerTitle}>
                                <h5>Portfolio Details</h5>
                            </div>
                            <div className={styles.projectDetails}>
                                <ul>
                                    <li><h6>Project name</h6> <span>{data.details.projectName}</span></li>
                                    <li><h6>Stack</h6> <span>{data.details.stack }</span></li>
                                    <li><h6>URL</h6> <span><a href={data.details.url} target="_blank">Просмотреть</a></span></li>
                                </ul>
                            </div>
                            <div className={styles.headerTitle}>
                                <h5>Description</h5>
                            </div>
                            <div>
                                <p>
                                    {data.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default New