import React from "react";
import styles from './projectItem.module.scss'
import proj from './../../common/img/net.jpg'
import Btn from "../../common/btn/Button";

const Project = (props: any) => {
    return (
        <div className="col-md-4 text-center ">
            <div className={styles.portfolioItem}>
                <div className={styles.portfolioImgBlock}>
                    <img src={props.img} alt="" className={styles.imgLol}/>
                    <div className={styles.btnProject}>
                        <Btn title={"Смотреть"} id={props.id}/>
                    </div>
                </div>
                <div className={styles.portfolioBody}>
                    <h3>Social Network</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...</p>
                </div>
            </div>
        </div>
    )
}

export default Project