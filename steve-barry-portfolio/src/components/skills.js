import React from 'react';
import TechSkills from './techSkills';
import SoftSkills from './softSkills';

function Skills() {
    return (  
        <div id="skills">
            <h3 className="marker">SKILLS</h3>
            <TechSkills />
            <SoftSkills />
        </div>
    )
}

export default Skills;