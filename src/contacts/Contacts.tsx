import React from 'react';
import styles from './contacts.module.scss'
import Title from "../common/headingTitle/Title";



const Contacts = (props: any) => {
    return (
        <div className={styles.contacts}>
            <div className="container">
                <Title title={'Contact With Me'} subTitle={'Contacts'}/>
                <form className={styles.form}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-outline mb-4">
                                <input type="text" id="form2Example1" className={`${'form-control'} ${styles.inputFeald}`} placeholder="Your Name"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-outline mb-4">
                                <input type="number" id="form2Example2" className={`${'form-control'} ${styles.inputFeald}`} placeholder="Your Phone"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-outline mb-4">
                                <input type="email" id="form2Example2" className={`${'form-control'} ${styles.inputFeald}`} placeholder="Your Email"/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <textarea className={`${'form-control'} ${styles.inputFeald}`} id="exampleFormControlTextarea1" rows={4} placeholder="Your Message*"></textarea>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>




    )
}
export default Contacts