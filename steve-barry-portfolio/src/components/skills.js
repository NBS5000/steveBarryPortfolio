import React from 'react';
import TechSkills from './techSkills';
import SoftSkills from './softSkills';
import HoverSkill from './hoverSkill';

function Skills() {
    return (  
        <div id="skills">
            <h3 className="marker">SKILLS</h3>
            <TechSkills />
            <SoftSkills />
            <HoverSkill />
        </div>
    )
}

export default Skills;