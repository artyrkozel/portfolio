import React from 'react';
import styles from'./App.module.css';
import Header from "./header/Header";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.App}>
            <Header />
      </header>
    </div>
  );
}

export default App;
