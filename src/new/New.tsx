import React from "react";
import styles from './new.module.scss'

export const New = () => {
    return (
        <div>
            <div className={`${styles.new} ${styles.cont}`}>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-12">
                            new
                        </div>
                    </div>

                </div>
            </div>
            <div className={styles.next}>
            </div>
        </div>

    )
}

export default New