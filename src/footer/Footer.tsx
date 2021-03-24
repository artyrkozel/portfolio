import React from "react";
import styles from './footer.module.scss'
export const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <p>Copyright © 2021 JevelinTheme – Theme by Shufflehound</p>
                    </div>
                </div>
            </div>
        </section>
    )
}