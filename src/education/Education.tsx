import React from "react";
import styles from "./education.module.scss"
import Title from "../common/headingTitle/Title";
import {Fade} from "react-awesome-reveal";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Education = () => {
    return (
        <section className={`${styles.education} ${styles.section}`}>
            <div className="container">
                <div className="row text-center justify-content-center">
                    <div className="col-md-10">
                        <Fade direction="top-left">
                            <Title title={'My Education'} subTitle={'Education'}/>
                        </Fade>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <div className={styles.educationContent}>
                            <div className={styles.timeLine}>
                                <div className={styles.timeLineBlock}>
                                    <div className={styles.cdTimelineImg}>
                                        <span className={styles.icon}></span>
                                    </div>
                                    <div className={styles.cdTimelineContent}>
                                        <h2>BACHALOR DIGREE</h2>
                                        <p>JAN 2009 - MAY 2010 | DEFODIL UNIVERSITY
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.timeLineBlock}>
                                    <div className={styles.cdTimelineImg}>
                                        <span className={styles.icon}></span>
                                    </div>
                                    <div className={styles.cdTimelineContent}>
                                        <h2>BACHALOR DIGREE</h2>
                                        <p>JAN 2009 - MAY 2010 | DEFODIL UNIVERSITY
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.timeLineBlock}>
                                    <div className={styles.cdTimelineImg}>
                                        <span className={styles.icon}></span>
                                    </div>
                                    <div className={styles.cdTimelineContent}>
                                        <h2>BACHALOR DIGREE</h2>
                                        <p>JAN 2009 - MAY 2010 | DEFODIL UNIVERSITY
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Education