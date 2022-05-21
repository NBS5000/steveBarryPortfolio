import React, {useState} from 'react';

function Code() {

    const onWheel = (event) => {
        event.preventDefault();
        let x = event.target.scrollLeft;
        let y = event.target.scrollTop;
    
        if (event.deltaY > 0) {
            x += 80;
        } else {
            x -= 80;
        }
        event.target.scrollTo(x,y);
    }

    const [codeModal, setCodeModal] = useState(false)
    const [modView, setModView] = useState(
        {
            title: "",
            about: "",
            deployed: "",
            repo: "",
        }
    )

    let viewCodeModal = false;
    async function codeModClick(event){
        debugger
        const code = event.target.getAttribute("data-value")
        if(code ==="cricket"){
            return
        }
        
        if(viewCodeModal || code ==="canx" ){
            
            viewCodeModal = false;
            setCodeModal(false);
        }else{
            const gitDeployLink = "https://nbs5000.github.io/";
            const apiUrl = 'https://api.github.com/repos/nbs5000/';
            const repoUrl = "https://github.com/NBS5000/";
            const repoName = code;
            const repo = repoUrl + repoName;
            const api = apiUrl + repoName;
            const deploy = gitDeployLink + repoName;

            // Get repo info from git api
            fetch(api)
            .then(
                res => res.json(),
            )
            .then(function(res){
                let repoTitle, repoTitle2;
                const about = res.description;
                let page = res.homepage;
                if(!about || !page){
                    setTimeout(function(){console.log("Waiting")},1000);
                }
                if(!page){
                        page = repo;
                }
                if(repoName === "Ecommerce-fullstack"){
                    // page = "https://mosespamarketplace.herokuapp.com/";
                    // visit.value = page;
                    // git.value = "https://github.com/cn-kp/Ecommerce-fullstack";
        
                }else{
                    // visit.value = repoName;
                    // git.value = repoName;
                }
                repoTitle = repoName;
        
                repoTitle = code.replace(/([A-Z])/g, ' $1').trim();
                repoTitle2 = repoTitle.charAt(0).toUpperCase() + repoTitle.slice(1);
                
                setModView({
                    title: repoTitle2,
                    about: about,
                    deployed: deploy,
                    repo: repo,
                })
                console.log(modView.repo)
                console.log(modView.deployed)
                viewCodeModal = true;
                setCodeModal(true);
            })
        }
    }     

    return (  
        <div id="code">
            <h3 className="marker">PROJECT EXAMPLES</h3>
            <div id="displayList" className="scroll" onWheel={onWheel}>
                <div className="itemBox">
                    <div className="circle">
                        <img className="itemImg" src="./assets/images/mosEspa.PNG" alt="" />
                    </div>
                    <div className="itemText">
                        <h4 className="itemH4">MosEspa</h4>
                        <p className="itemP">An e-commerce site set in the Star Wars universe</p>
                    </div>
                    <button onClick={codeModClick} className="projViewBtn" data-value="mosEspa"></button>
                </div>
                <div className="itemBox">
                    <div className="circle">
                        <img className="itemImg" src="./assets/images/dateNight.png" alt="" />
                    </div>
                    <div className="itemText">
                        <h4 className="itemH4">Date Night</h4>
                        <p className="itemP">An app to help even the most nervous person before a date</p>
                    </div>
                    <button onClick={codeModClick} className="projViewBtn" data-value="dateNight"></button>
                </div>
                <div className="itemBox">
                    <div className="circle">
                        <img className="itemImg" src="./assets/images/password.png" alt="" />
                    </div>
                    <div className="itemText">
                        <h4 className="itemH4">Password Generator</h4>
                        <p className="itemP">Where a user can select parameters and have a password generated for them</p>
                    </div>
                    <button onClick={codeModClick} className="projViewBtn" data-value="passwordGenerator"></button>
                </div>
                <div className="itemBox">
                    <div className="circle">
                        <img className="itemImg" src="./assets/images/quiz.png" alt="" />
                    </div>
                    <div className="itemText">
                        <h4 className="itemH4">Quiz Time!</h4>
                        <p className="itemP">A timed, Star Wars themed quiz, with multiple choice questions and a high score leaderboard</p>
                    </div>
                    <button onClick={codeModClick} className="projViewBtn" data-value="quizTime"></button>
                </div>
                <div className="itemBox">
                    <div className="circle">
                        <img className="itemImg" src="./assets/images/theWeather.png" alt="" />
                    </div>
                    <div className="itemText">
                        <h4 className="itemH4">The Weather</h4>
                        <p className="itemP">An app where a user can enter a location and get the current and upcoming weather</p>
                    </div>
                    <button onClick={codeModClick} className="projViewBtn" data-value="weather"></button>
                </div>
                <div className="itemBox">

                        <div className="circle">
                            <img className="itemImg" src="./assets/images/scheduler.png" alt="" />
                        </div>
                        <div className="itemText">
                            <h4 className="itemH4">Scheduler</h4>
                            <p className="itemP">A scheduler to track the days events</p>
                        </div>
                        <button onClick={codeModClick} className="projViewBtn" data-value="scheduler"></button>
                </div>
                <div className="itemBox">
                    <div className="circle">
                        <img className="itemImg" src="./assets/images/cricket.png" alt="" />
                    </div>
                    <div className="itemText">
                        <h4 className="itemH4">Cricket</h4>
                        <p className="itemP">Fancy a game?</p>
                    </div>
                    <button className="projViewBtn"/*onClick={cricket}*/ data-value="cricket"></button>
                </div>
            </div>




            { !codeModal ? (
                <>
                    <div></div>
                </>
            ) : (
                <>
                    <div id="projModal" className="modal">
                        <div className="modal-content_proj">
                            <h5 id="modalTitle">{modView.title}</h5>
                            <p id="modalAbout">{modView.about}</p>
                            <div id="frameDiv">
                                <iframe title="projPrev" id="modalView" src={modView.deployed} frameBorder="0"></iframe>
                            </div>
                            <div id="projBtnSet">
                                <button id="visit" className="modBtn" onClick={()=> window.open(modView.deployed, "_blank")}>Visit</button>
                                <button id="git" className="modBtn" onClick={()=> window.open(modView.repo, "_blank")}>Github</button>
                                <button 
                                    id="canx" 
                                    className="modBtn canx" 
                                    target="_blank" 
                                    onClick={codeModClick} 
                                    data-value="canx">
                                    Cancel</button>
                            </div>
                        </div>
                    </div>
                </>
                )}

        </div>
    )
}

export default Code;