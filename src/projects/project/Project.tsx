import React from "react";
import styles from './projectItem.module.scss'
import Btn from "../../common/btn/Button";

const Project = React.memo((props: any) => {
    return (
        <div className="col-lg-4 col-md-12 col-sm-10 col-xs-10 text-center">
            <div className={styles.portfolioItem}>
                <div className={styles.portfolioImgBlock}>
                    <img src={props.img} alt="" className={styles.imgLol}/>
                </div>
                <div className={styles.portfolioBody}>
                    <h3>{props.title}</h3>
                    <Btn title={"Смотреть"} id={props.id}/>
                </div>
            </div>
        </div>
    )
})

export default Project