(() =>{

    const btn_menu = document.querySelector("#btn_menu");
    const menu = document.querySelector("#menu_responsive");
    const menu_bg = document.querySelector(".black_menu");
    const nav_link = document.querySelectorAll(".nav__link")

    btn_menu.addEventListener("click", () =>{
        menu.style.right = "0";
        menu_bg.style.display= "block";
        console.log([...nav_link])
    });

    menu_bg.addEventListener("click", () =>{
        menu.style.right = "-250px";
        menu_bg.style.display= "none";
    })

    nav_link.forEach(item =>{
        item.addEventListener("click", () =>{
            menu.style.right = "-250px";
            menu_bg.style.display= "none";
        });
    })

})();