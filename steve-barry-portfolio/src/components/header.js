import React from 'react';
import Contact from './contact';

function AboutMe() {
    return (  
        <header>
            <div id="ball3"></div>
            <div id="hdBody"></div>

            <h1>
                <span id="fName">Stephen</span><span id="lName">BARRY</span>
            </h1>
            <h2>
                Full Stack Web Developer
            </h2>

            <Contact />
            <div id="burger">
                <div class="contactIcon">
                    <img class="contactImg" src="./assets/images/burger.png" alt="Email Icon" />
                </div>
                
            </div>
        </header>
    )
}

export default AboutMe;
