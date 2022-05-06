    var blendAmount = 70;
    var delay = -10;
    var windowWidth = window.innerWidth;
    var bg = document.getElementById("bg");

    document.onmousemove = function(e){
        mouseX = Math.round(e.pageX / windowWidth * 100 - delay);
        
        col1 = mouseX - blendAmount;
        col2 = mouseX + blendAmount;
        
        bg.style.background = "linear-gradient(to right, #156785 "+ col1 +"%, #fad0c4 "+ col2 +"%)";
    }