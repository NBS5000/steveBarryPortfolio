import React from 'react';

function SoftSkills({setSkill}) {

    function mouse(event){
        setSkill(event.target.getAttribute("alt"));
    }

    return (  
        <div id="softSkills">
            <h5 className="marker">Soft</h5>
            <div id="techList"> 
                <img onMouseOver={mouse} onMouseOut={() => setSkill("")}  className="skillsIcon" src="https://cdn0.iconfinder.com/data/icons/scrum-team-symbols/220/content_design-512.png" alt="Effective writing of training guides, training and delivery" />
                <img onMouseOver={mouse} onMouseOut={() => setSkill("")}  className="skillsIcon" src="https://pacific-international.com/wp-content/uploads/2021/07/icon-blue-leadership@3x.png" alt="Leadership" />
                <img onMouseOver={mouse} onMouseOut={() => setSkill("")}  className="skillsIcon" src="https://lh3.googleusercontent.com/C_Ty0alIJNrRQz5pNFmgA1rsRnhZDj67eVCCHXoJFFot0FQEZydARPRKbBADyHQoA0_Dj6gLITCshiJq6C-H-QM_U2mJwJZVLOQPnwvCL2RerGMEhw0" alt="Efficient researching for information and answers" />
                <img onMouseOver={mouse} onMouseOut={() => setSkill("")}  className="skillsIcon" src="https://www.cdc.gov/ncbddd/hemoglobinopathies/images/teamwork-Shadow.png" alt="Stakeholder engagement" />
                <img onMouseOver={mouse} onMouseOut={() => setSkill("")}  className="skillsIcon" src="https://cdn0.iconfinder.com/data/icons/positive-character-traits-alphabet-i-part-1/333/positive-i002-512.png" alt="Fully capable of independent working" />
                <img onMouseOver={mouse} onMouseOut={() => setSkill("")}  className="skillsIcon" src="https://svgsilh.com/png-1024/2324013.png" alt="Team player" />
                <img onMouseOver={mouse} onMouseOut={() => setSkill("")}  className="skillsIcon" src="https://images.squarespace-cdn.com/content/v1/5bfedcc09d5abb7280835623/1548948164096-W07T3HND8X9G5KKKUP5A/Attention+to+Detail+Icon.png" alt="Attention to detail" />
            </div> 
        </div>
    )
}

export default SoftSkills;