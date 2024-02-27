const btn_menu = document.querySelector(".btn-menu")
const menu = document.querySelector(".menu")
const btn_close = document.querySelector(".btn-close")

btn_menu.addEventListener("click", function mostrarMenu(){
    menu.style.display = "block"
})

btn_close.addEventListener("click", function feixarMenu() {
    menu.style.display = "none"
})
