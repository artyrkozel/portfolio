import React from "react";
import styles from './projectItem.module.scss'
import Btn from "../../common/btn/Button";

const Project = React.memo((props: any) => {
    return (
        <div className="col-md-4" style={{padding: '0'}} >
            <div className={styles.wrContent} style={{backgroundImage: `url(${props.bg})`}}>
                <div className={styles.content}>
                    <div style={{height: '240px'}}>
                    </div>
                    <h1 className={styles.title}>{props.title}</h1>
                    <Btn title={"More"} id={props.id}/>
                </div>

            </div>
        </div>
    )
})

export default Project