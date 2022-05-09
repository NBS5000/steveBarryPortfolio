import React, {useState} from 'react';
import Contact from './contact';
import Modals from './modals';

function Header() {
    const [view, setView] = useState("");
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

                <Contact setView={setView}/>
                <Modals view={view} />
                <div id="burger">
                    <div className="contactIcon">
                        <img className="contactImg" src="./assets/images/burger.png" alt="Email Icon" />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;
