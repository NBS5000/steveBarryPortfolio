import React from 'react';
import Contact from './contact';

function Header() {

    return (  
        <div id="headerWrap">
            {/* <div id="bgBody"></div> */}
            <div id="ball1"></div>
            <header>
                <div id="ball3"></div>
                {/* <div id="hdBody"></div> */}

                <h1 id="fullName">
                    <span id="fName">Stephen</span><span id="lName">BARRY</span>
                </h1>
                
                <h2 id="fswd">
                    Full Stack Web Developer
                </h2>

                <Contact />
                

                <div id="headerBlur"></div>
            </header>
        </div>
    )
}

export default Header;
