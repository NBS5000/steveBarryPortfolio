import React from 'react';

function HoverSkill({skill}) {

    return (  
        <div id="hoverDiv">
            <h4 id="skillHover" className="marker">{skill}</h4>
        </div>
    )
}

export default HoverSkill;