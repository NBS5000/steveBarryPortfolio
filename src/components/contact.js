import React from 'react';

function Contact() {
    return (  
        <div id="contact">
            <div className="contactIcon">
                <a href="mailto:nbs5000.dev@gmail.com"><img className="contactImg" src="./assets/images/email.png" alt="Email Icon" /></a>
            </div>
            <div className="contactIcon">
                <a href="https://github.com/NBS5000" target="_blank" rel="noopener noreferrer"><img className="contactImg" src="./assets/images/github.png" alt="Github Icon" /></a>
            </div>
            <div className="contactIcon">
                <a href="https://www.aedin.com/in/stephen-barry-676306108/" target="_blank" rel="noopener noreferrer"><img className="contactImg" src="./assets/images/linkedin.png" alt="aedIn Icon" /></a>
            </div>
            <div className="contactIcon" id="burger2">
                <img className="contactImg" src="./assets/images/burger.png" alt="Burger Icon" />
            </div>
        </div>
    )
}

export default Contact;
