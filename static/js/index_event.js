let call_back_btn = document.querySelector(".main_section .main_section_content .call_back_btn");
let cursor = document.querySelector(".custom_cursor_two");
// Main_section Item
let main_section_header_name = document.querySelector(".main_section .main_section_content .main_section_header h2");
let main_section_callback_text = document.querySelector(".main_section .main_section_content .main_section_callback_text h2");

window.addEventListener("load", () => {
    call_back_btn.addEventListener("mouseover", () => {
        cursor.style.width = 50 + "px";
        cursor.style.height = 50 + "px";
        cursor.style.border = "none";
        cursor.style.background = "rgba(0,0,0,0.5)"
    })
    call_back_btn.addEventListener("mouseleave", () => {
        cursor.style.width = 20 + "px";
        cursor.style.height = 20 + "px";
        cursor.style.border = "2px solid #fff";
        cursor.style.background = "transparent";
    })
    gsap.to(".main_anime1", {delay:0.5,duration: 1, opacity: 1, top: 0 + "px", stagger: 0.5});
    gsap.to(".social_media_bar", {delay:2, duration: 1, opacity: 1})
})