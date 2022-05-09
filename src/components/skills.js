import React, {useState} from 'react';
import TechSkills from './techSkills';
import SoftSkills from './softSkills';
import HoverSkill from './hoverSkill';

function Skills() {
    const [skill, setSkill] = useState("");
    return (  
        <div id="skills">
            <h3 className="marker">SKILLS</h3>
            <TechSkills setSkill={setSkill}/>
            <SoftSkills setSkill={setSkill}/>
            <HoverSkill skill={skill} />
        </div>
    )
}

export default Skills;