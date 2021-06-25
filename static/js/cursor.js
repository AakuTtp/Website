let cursor_one = document.querySelector(".custom_cursor");
let cursor_two = document.querySelector(".custom_cursor_two");

document.addEventListener("mousemove", e => {
    let x = e.pageX;
    let y = e.pageY;

    cursor_one.style.top = y - 2.5 + "px";
    cursor_one.style.left = x - 2.5 + "px";

    cursor_two.style.top = y - 10 + "px";
    cursor_two.style.left = x - 10 + "px";

})

// Layout Cursor Animation
function social_media_action(){
    let sm_links = document.querySelectorAll(".social_media_bar .social_media_icons a")
    for(i = 0; i < sm_links.length; i++){
        sm_links[i].addEventListener("mouseover", () => {
            cursor_two.style.width = "30px";
            cursor_two.style.height = "30px";
            cursor_two.style.background = "rgba(0,0,0,0.5)";
            cursor_two.style.border = "none"
        })
        sm_links[i].addEventListener("mouseleave", () => {
            cursor_two.style.width = "20px";
            cursor_two.style.height = "20px";
            cursor_two.style.background = "transparent";
            cursor_two.style.border = "2px solid #fff";
        })
    }
}

social_media_action()