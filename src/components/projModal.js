import React from 'react';

function ProjModal() {
    return ( 
        <div id="projModal" className="modal">
            <div className="modal-content_proj">
                <h5 id="modalTitle"></h5>
                <p id="modalAbout"></p>
                <div id="frameDiv">
                    <iframe id="modalView" src="" frameborder="0"></iframe>
                </div>
                <div id="projBtnSet">
                    <button id="visit" className="modBtn" onclick="visitPage(value)" value="">Visit</button>
                    <button id="git" className="modBtn" onclick="visitGit(value)" value="">Github</button>
                    <button id="canx" className="modBtn canx" target="_blank">Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default ProjModal;