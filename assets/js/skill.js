let skill;
const skillIcon = document.querySelectorAll('.skillsIcon');
skillIcon.forEach(btn => {
    // if(btn.mouseover){
        btn.onmouseenter = (event) => {
            skill = event.target.getAttribute("alt");
            console.log("test");
            document.getElementById("skillHover").textContent = skill;
        }
    // }else{
    //     document.getElementById("skillHover").textContent = skill;
    // }

    btn.onmouseout = () => {
        document.getElementById("skillHover").textContent = " ";
    }
});