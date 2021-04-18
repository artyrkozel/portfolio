import React from 'react';
import styles from './App.module.scss';
import Header from "./header/Header";
import "bootstrap/dist/css/bootstrap.css"
import {Route,Redirect } from 'react-router-dom'
import New from "./new/New";
import Components from "./components/components";
import { Footer } from './footer/Footer';
import Main from "./main/Main";
import About from "./about/About";
import Education from "./education/Education";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";


function App() {
    return (
        <>
            <Header/>
            <Route path="/">
                <Redirect to="/" />
            </Route>
            <Route exact path={'/'} render={() => <Main />}/>
            <Route exact path={'/'} render={() => <About />}/>
            <Route exact path={'/'} render={() => <Education />}/>
            <Route exact path={'/'} render={() => <Skills />}/>
            <Route exact path={'/'} render={() =><Projects />}/>
            <Route exact path={'/'} render={() => <Contacts />}/>
            {/*<Route exact path={'/'} render={() => <Components/>}/>*/}
            <Route  path={'/new/:id?'} render={() => <New />}/>
            <Footer />
        </>
    );
}

export default App;
