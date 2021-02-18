import React from "react";
import styles from './new.module.scss'
import {NavLink, useParams} from 'react-router-dom'
import bg from './../common/img/bg.jpg'
import place from './../common/img/placholder.png'

const arr = [
    {title: 'SocialNet', details: {projectName: 'dno', stack: 'React', url: ''}, description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like '},
    {title: 'TodoList',details: {projectName: 'dno', stack: 'React', url: ''}, description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like '},
    {title: 'Вертска',details: {projectName: 'dno', stack: 'React', url: ''}, description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like '}
]

export const New = (props: any) => {
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
                            <img className={styles.portfolioImg} src={place} alt=""/>
                        </div>
                        <div className="col-lg-4">
                            <div className={styles.headerTitle}>
                                <h5>Portfolio Details</h5>
                            </div>
                            <div className={styles.projectDetails}>
                                <ul>
                                    <li><h6>Project name</h6> <span>{data.details.projectName}</span></li>
                                    <li><h6>Stack:</h6> <span>{data.details.stack }</span></li>
                                    <li><h6>URL:</h6> <span>{data.details.stack }</span></li>
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