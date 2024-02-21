const searchbtn = document.querySelector(".searchbtn");
// const form_icon = document.getElementById("form_icon");
const cartbtn = document.getElementById("cart-shopping");
let btn_search = document.querySelector(".ri-close-circle-line");

searchbtn.onclick = function(){
    document.getElementById("form_icon").classList.toggle('show-search');
    if(document.getElementById("form_icon").classList.contains('show-search')){
        searchbtn.classList.remove("ri-search-line");
        searchbtn.classList.add('ri-close-circle-line');
    }
    else{
        searchbtn.classList.add('ri-search-line');
        searchbtn.classList.remove('ri-close-circle-line');
    }
}
cartbtn.onclick = function(){
    document.getElementById("cart").classList.toggle('show-search');
    if(document.getElementById("cart").classList.contains('show-search')){
        cartbtn.classList.remove("ri-shopping-cart-line");
        cartbtn.classList.add('ri-close-circle-line');
    }
    else{
        cartbtn.classList.add('ri-shopping-cart-line');
        cartbtn.classList.remove('ri-close-circle-line');
    }
}

// ---------- Dark Light Theme 
let change_theme = document.getElementById("change_theme");
change_theme.onclick = function(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
        change_theme.classList.remove("ri-menu-line");
        change_theme.classList.add('ri-sun-line');
    }
    else{
        change_theme.classList.add('ri-menu-line');
        change_theme.classList.remove('ri-sun-line');
    }
}

// ---------- Menu Section
let menu_section = document.querySelector(".menu-selection")
menu_section.addEventListener("click", function(e){
    if(e.target.classList.contains("box-selection") && !e.target.classList.contains("active")){
        menu_section.querySelector(".active").classList.remove("active")
        e.target.classList.add("active")

        // mai dashed
        const target = e.target.getAttribute('data-target')
        let menu = document.querySelector(".menu")
        menu.querySelector(".main-dashed.show").classList.remove("show")
        menu.querySelector(target).classList.add("show")
    }
})

//  event swiper
let eventswiper = new Swiper('.event-swiper',{
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    breakpoints:{
        1150:{
            slidesPerView: 2,
        }
    }
})

//  event swiper
let garellyswiper = new Swiper('.garelly-swiper',{
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    breakpoints:{
        1150:{
            slidesPerView: 3,
        }
    }
})
//  teams swiper

let teamswiper = new Swiper('.team-swiper',{
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    breakpoints:{
        1150:{
            slidesPerView: 3,
        }
    }
})
