import React from "react";
import styles from './nav.module.css'

const Nav = () => {
    return (
            <div className={styles.nav}>
                <a href="#">Главная</a>
                <a href="#">Скиллы</a>
                <a href="#">Проекты</a>
                <a href="#">Контакты</a>
                <a href="#">Связаться со сной</a>
            </div>
    )
}

export default Nav