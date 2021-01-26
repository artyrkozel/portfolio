import React from 'react';
import styles from './contacts.module.scss'
import Title from "../common/headingTitle/Title";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import EmailIcon from '@material-ui/icons/Email';
import ContactInfo from "../common/contactInfo/contactInfo";

const Contacts = (props: any) => {
    return (
        <section className={`${styles.contacts} ${styles.section}`} id={'contacts'}>
                <div className="container">
                    <Title title={'Contact With Me'} subTitle={'Contacts'}/>
                    <div className="row">
                        <ContactInfo icon={'email'} title={'Email'} email={'filaous@example.com'}/>
                        <ContactInfo icon={'phone'} title={'Phone'} email={'+375336351957'}/>
                    </div>
                    <form className={styles.form}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-outline mb-4">
                                    <input type="text" id="form2Example1"
                                           className={`${'form-control'} ${styles.inputFeald}`} placeholder="Your Name"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-outline mb-4">
                                    <input type="number" id="form2Example2"
                                           className={`${'form-control'} ${styles.inputFeald}`} placeholder="Your Phone"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-outline mb-4">
                                    <input type="email" id="form2Example2"
                                           className={`${'form-control'} ${styles.inputFeald}`} placeholder="Your Email"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                <textarea className={`${'form-control'} ${styles.inputFeald}`}
                                          id="exampleFormControlTextarea1" rows={8}
                                          placeholder="Your Message*"></textarea>
                                </div>
                            </div>
                            <div className="col-md-12 text-center">
                                <div className={styles.btn}>
                                    <button type={"submit"}>
                                        <span className={styles.text}>Отправить</span>
                                        <span className={styles.icon}><ArrowForwardIosIcon/></span>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
        </section>

    )
}
export default Contacts