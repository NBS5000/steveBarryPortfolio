import React from 'react';

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
        console.log("test");
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
                    <button className="projViewBtn" data-value="mosEspa"></button>
                </div>
                <div className="itemBox">
                    <div className="circle">
                        <img className="itemImg" src="./assets/images/dateNight.png" alt="" />
                    </div>
                    <div className="itemText">
                        <h4 className="itemH4">Date Night</h4>
                        <p className="itemP">An app to help even the most nervous person before a date</p>
                    </div>
                    <button className="projViewBtn" data-value="dateNight"></button>
                </div>
                <div className="itemBox">
                    <div className="circle">
                        <img className="itemImg" src="./assets/images/password.png" alt="" />
                    </div>
                    <div className="itemText">
                        <h4 className="itemH4">Password Generator</h4>
                        <p className="itemP">Where a user can select parameters and have a password generated for them</p>
                    </div>
                    <button className="projViewBtn" data-value="passwordGenerator"></button>
                </div>
                <div className="itemBox">
                    <div className="circle">
                        <img className="itemImg" src="./assets/images/quiz.png" alt="" />
                    </div>
                    <div className="itemText">
                        <h4 className="itemH4">Quiz Time!</h4>
                        <p className="itemP">A timed, Star Wars themed quiz, with multiple choice questions and a high score leaderboard</p>
                    </div>
                    <button className="projViewBtn" data-value="quizTime"></button>
                </div>
                <div className="itemBox">
                    <div className="circle">
                        <img className="itemImg" src="./assets/images/theWeather.png" alt="" />
                    </div>
                    <div className="itemText">
                        <h4 className="itemH4">The Weather</h4>
                        <p className="itemP">An app where a user can enter a location and get the current and upcoming weather</p>
                    </div>
                    <button className="projViewBtn" data-value="weather"></button>
                </div>
                <div className="itemBox">
                    <div className="circle">
                        <img className="itemImg" src="./assets/images/scheduler.png" alt="" />
                    </div>
                    <div className="itemText">
                        <h4 className="itemH4">Scheduler</h4>
                        <p className="itemP">A scheduler to track the days events</p>
                    </div>
                    <button className="projViewBtn" data-value="scheduler"></button>
                </div>
                <div className="itemBox">
                    <div className="circle">
                        <img className="itemImg" src="./assets/images/cricket.png" alt="" />
                    </div>
                    <div className="itemText">
                        <h4 className="itemH4">Cricket</h4>
                        <p className="itemP">Fancy a game?</p>
                    </div>
                    <button className="projViewBtn" onClick="cricket()" data-value="cricket"></button>
                </div>
            </div>
        </div>
    )
}

export default Code;