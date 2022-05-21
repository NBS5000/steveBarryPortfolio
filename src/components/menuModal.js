import React from 'react';

function MenuModal({view}) {

    return ( 
            <div id="myModal_menu" className="modal" style={{view}}>
                <div className="modal-content">
                    <div id = "container_menu">         
                        <h3>Contact Me</h3>   
                        <div className="modalContact">
                            <div className="contactIcon">
                                <a className="modContactLink" href="mailto:nbs5000.dev@gmail.com">
                                    <img className="contactImg" src="./assets/images/email.png" alt="Email Icon" />
                                    <p className="contactP">nbs5000.dev@gmail.com</p>
                                </a>
                            </div>
                        </div>
                        <div className="modalContact">
                            <div className="contactIcon">
                                <a className="modContactLink" href="https://github.com/NBS5000" target="_blank"  rel="noopener noreferrer">
                                    <img className="contactImg" src="./assets/images/github.png" alt="Github Icon" />
                                    <p className="contactP">https://github.com/NBS5000</p>
                                </a>
                            </div>
                        </div>
                        <div className="modalContact">
                            <div className="contactIcon">
                                <a className="modContactLink" href="https://www.linkedin.com/in/stephen-barry-676306108/" target="_blank"  rel="noopener noreferrer">
                                    <img className="contactImg" src="./assets/images/linkedin.png" alt="LinkedIn Icon" />
                                    <p className="contactP">https://www.linkedin.com/in/<br/>stephen-barry-676306108/</p>
                                </a>
                            </div>
                        </div>
                        <div className="modalContact">
                            <div className="contactIcon">
                                <a className="modContactLink" href="https://www.google.com/maps/place/Terrigal+NSW+2260/@-33.4457731,151.4113257,14z/data=!3m1!4b1!4m5!3m4!1s0x6b72b58677fc5889:0x5017d681632de80!8m2!3d-33.448011!4d151.444461" target="_blank"  rel="noopener noreferrer">
                                    <img className="contactImg" src="./assets/images/map.png" alt="Google Maps Icon" />
                                    <p className="contactP">Terrigal, NSW</p>
                                </a>
                            </div>
                        </div>
                        <div className="modalContact">
                            <div id="optionsCV" className="contactIcon">
                                <a id="viewCV" className="modContactLink" href="https://docs.google.com/document/d/1rUfsYP4VY3RjZRth_pvh2s8ZYj7r6FfjqfcYySy1COc/edit?usp=sharing" target="_blank"  rel="noopener noreferrer">
                                    <img className="contactImg" src="./assets/images/resume.png" alt="Resume Icon" />
                                    <p id="viewCvP" className="contactP">Steve Barry - Resume</p>
                                </a>
                                <a id="downCV" className="modContactLink" href="%PUBLIC_URL%/assets/doc/SteveBarry_CV.pdf" download>
                                    <img id="downCvImg" className="contactImg" src="./assets/images/download.png" alt="Download Icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <button id="canx" className="modBtn canx" target="_blank">Cancel</button>
                </div>
            </div>
    )
}

export default MenuModal;