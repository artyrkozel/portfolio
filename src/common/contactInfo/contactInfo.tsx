import React from "react";
import styles from './contactInfo.module.scss'
import EmailIcon from "@material-ui/icons/Email";
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';


const ContactInfo = (props: any) => {
    return (
            <div className="col-md-6">
                <div className={styles.contactInfo}>
                    <div className={styles.contactIcon}>
                        <span>{props.icon === 'phone' ? <PhoneAndroidIcon/> : <EmailIcon/>}</span>
                    </div>
                    <div className={styles.contactBody}>
                        <h5>{props.title}</h5>
                        <div>{props.email}</div>
                    </div>
                </div>
            </div>
    )
}
export default ContactInfo