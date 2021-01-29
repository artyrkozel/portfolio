import React from 'react';
import styles from './App.module.css';
import Header from "./header/Header";
import "bootstrap/dist/css/bootstrap.css"

import {Route} from 'react-router-dom'
import New from "./new/New";
import Components from "./components/components";

function App() {
    return (
        <div className={styles.appContent}>
            <Header/>
            <Route exact path={'/'} render={() => <Components/>}/>
            <Route path={'/new'} render={() => <New/>}/>
        </div>


    );
}

export default App;
