import React from 'react';
import styles from'./App.module.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.App}>
            <Header />
            <Main />
            <Skills />
      </header>
    </div>
  );
}

export default App;
