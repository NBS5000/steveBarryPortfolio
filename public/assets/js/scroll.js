/* scroll script */
const el = document.getElementById("displayList");
el.addEventListener("wheel", function (event) {
    const div = document.getElementById("code");
    let x = el.scrollLeft;
    let y = el.scrollTop;
    let b_y = div.scrollTop;

    if (event.deltaY > 0) {
        x += 80;
    } else {
        x -= 80;
    }
    el.scrollTo(x,y);
        event.deltaX = 0;
    // window.scrollTo(0, b_y);
    console.log(b_y);
    });

    el.addEventListener("hover", function (event) {

    window.scrollTo(0, y);
})