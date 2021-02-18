import React from "react";
import styles from './projectItem.module.scss'
import Btn from "../../common/btn/Button";

const Project = (props: any) => {
    return (
        <div className="col-lg-4 col-md-12 col-sm-10 col-xs-10 text-center">
            <div className={styles.portfolioItem}>
                <div className={styles.portfolioImgBlock}>
                    <img src={props.img} alt="" className={styles.imgLol}/>
                </div>
                <div className={styles.portfolioBody}>
                    <h3>ToDo List</h3>

                    <div className={styles.btnProject}>
                        <div className={styles.iconBorder}></div>
                        <Btn title={"Смотреть"} id={props.id}/>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Project