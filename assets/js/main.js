/* Menu Show */
const icon = document.getElementById("icon");

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    menu = document.getElementById(navId);

    if(toggle && menu){
        toggle.addEventListener("click", () => {
            menu.classList.toggle("show");

            // to change menu icon to (X) onclick
            if(icon.classList.contains("bx-menu")){
                icon.classList.remove("bx-menu");
                icon.classList.add("bx-x");
            } else{
                icon.classList.remove("bx-x");
                icon.classList.add("bx-menu");
            }
        });
    };
};

showMenu("nav-toggle", "nav-menu");


/* Remove menu */
const navLink = document.querySelectorAll(".nav__link"),
    navMenu = document.getElementById("nav-menu");

function linkAction(){
    navMenu.classList.remove("show");
};

navLink.forEach(n => n.addEventListener("click", linkAction));
