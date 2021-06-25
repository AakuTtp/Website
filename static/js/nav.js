let nav_links_items = document.querySelectorAll("nav .nav_items .nav_links li");
let nav_bar = document.querySelector("nav .nav_items");
// BurgerMenu
let burger_menu = document.querySelector("nav .burger_menu");
let buger_menu_bar = document.querySelectorAll("nav .burger_menu div");
// Nav Links Span
let nav_open = false
window.addEventListener("load", () => {
    for(i = 0; i <= 3; i++){
        nav_links_items[i].style.transitionDelay = i * 0.25 + 's';
        nav_links_items[i].style.opacity = 1;
        nav_links_items[i].style.top = 0 + "px";
    }

    for(i = 0; i < 3; i++){
        buger_menu_bar[i].style.transitionDelay = i * 0.25 + 's';
        if(i == 0){
            buger_menu_bar[i].style.width = 15 + "px";
        }
        if(i == 1){
            buger_menu_bar[i].style.width = 30 + "px";
        }
        if(i == 2){
            buger_menu_bar[i].style.width = 15 + "px";
        }
        
    }

    burger_menu.addEventListener("click", () => {
        if(nav_open === false){
            nav_bar.style.transform = "translateX(0%)";
            setTimeout(() => {
                for(i = 0; i < 4; i++){
                    console.log(nav_links_items[i])
                    nav_links_items[i].style.transitionDelay = i * 0.12 + 's';
                    nav_links_items[i].style.right = 0 + "px";
                    nav_links_items[i].style.opacity = 1;
                }
            }, 350);

    
                
            nav_open = true;
        }
        else{
            for(i = 0; i < 4; i++){
                console.log(nav_links_items[i])
                nav_links_items[i].style.transitionDelay = i * 0.12 + 's';
                nav_links_items[i].style.right = -50 + "px";
                nav_links_items[i].style.opacity = 0;

            }
            nav_bar.style.transform = "translateX(100%)";
            nav_bar.style.transitionDelay = 0.12 * 4 + "s";
            nav_open = false;
        }


    });


})
