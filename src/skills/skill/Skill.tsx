import React from "react";
import styles from './skill.module.scss'
import {SvgIcon} from "@material-ui/core";
import bgItem from './../../common/img/bgItem.jpg'


const Skill = React.memo((props: any) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className={styles.skillItem}>
                <img src={bgItem} className={styles.skillBg} alt=""/>
                <div className={styles.body}>
                    <h4>{props.number}</h4>
                    <h5>{props.title}</h5>
                    <span className={styles.description}>{props.description}</span>
                </div>
                <div className={styles.iconNext}>
                    <span><SvgIcon component={props.icon}/></span>
                </div>
                <div className={styles.iconBorder}></div>
            </div>
        </div>

    )
})

export default Skill