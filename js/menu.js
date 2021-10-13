const hambuger = document.querySelector('.hambuger')
const menu = document.querySelector('.menu-navegacion')

hambuger.addEventListener("click",()=>{
    menu.classList.toggle("spread")
})

window.addEventListener("click",e=>{
    if(menu.classList.contains("spread") && e.target != menu && e.target !=hambuger){
        menu.classList.toggle("spread")


    }


})