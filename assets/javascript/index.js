const toggleMenu = document.querySelector("#ToggleMenu")
const closeMenu = document.querySelector("#closeMenu")
const menu = document.querySelector("#navList")

//Nav Menu
toggleMenu.addEventListener('click',()=>{
    toggleMenu.classList.remove("menuActive")
    closeMenu.classList.add('menuActive')
    menu.classList.add("menuActive")
})
closeMenu.addEventListener('click',()=>{
    closeMenu.classList.remove("menuActive")
    menu.classList.remove("menuActive")
    toggleMenu.classList.add('menuActive')
})

let homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
})