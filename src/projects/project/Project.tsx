import React, {useEffect} from "react";
import styles from './projectItem.module.scss'
import Btn from "../../common/btn/Button";
import {Link, NavLink} from "react-router-dom";
import { useHistory } from "react-router-dom";
const Project = React.memo((props: any) => {
    return (
            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12" style={{padding: '0'}} >
                <NavLink to={`/new/` + props.id} className={`${styles.maiBtn} ${styles.btn5}`}>
                <div className={styles.wrContent}>
                    <div className={styles.content}>
                        <div style={{height: '120px'}}>
                        </div>
                        <h1 className={styles.title}>{props.title}</h1>
                        <Btn title={"More"} id={props.id}/>
                    </div>

                </div>
                </NavLink>
            </div>



    )
})

export default Project