import React from "react";
import Main from "../main/Main";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import Contacts from "../contacts/Contacts";
import About from "../about/About";
import Education from "../education/Education";

const Components = () => {
    return (
        <div>
            <Main />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Contacts />
        </div>
    )
}
export default Components