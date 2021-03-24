import React from "react";
import styles from './skill.module.scss'
import {SvgIcon} from "@material-ui/core";
import bgItem from './../../common/img/bgItem.jpg'
import { ProgressCircular } from "../../common/ProgressCircular/ProgressCircular";


const Skill = React.memo((props: any) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className={styles.skillItem}>
                <img src={bgItem} className={styles.skillBg} alt="bg"/>
                <div className={styles.body}>
                    <h4>{props.number}</h4>
                    <h5>{props.title}</h5>
                </div>
                <div className={styles.iconNext}>
                    <span><SvgIcon component={props.icon}/></span>
                </div>
                <div className={styles.iconBorder}></div>
                <ProgressCircular progress={70} radius={70}/>
            </div>
        </div>

    )
})

export default Skill