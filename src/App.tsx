import React from 'react';
import styles from'./App.module.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import "bootstrap/dist/css/bootstrap.css"
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";








function App() {
  return (
    <div className={styles.App}>
            <header className={styles.App}>
                <Header />
                <Main />
                <Skills />
                <Projects />
                <Contacts />
            </header>

    </div>
  );
}

export default App;
