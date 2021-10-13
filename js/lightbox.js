const imagenes = document.querySelectorAll(".img-galeria")
const imageneslight = document.querySelector(".agregar-imagen")
const contenedorlight = document.querySelector(".imagen-light")
const hambuger1 = document.querySelector('.hambuger')

imagenes.forEach(imagen =>{
    imagen.addEventListener('click',()=>{
        aparecerimagne(imagen.getAttribute("src"))
       
       
    })
})

contenedorlight.addEventListener("click",(e)=>{
    if(e.target !== imageneslight){
        contenedorlight.classList.toggle("show")
        imageneslight.classList.toggle("showImage")
        hambuger1.style.opacity='1'

    }

})

const aparecerimagne = (imagen) =>{

    imageneslight.src=imagen;
    contenedorlight.classList.toggle("show")
    imageneslight.classList.toggle("showImage")
    hambuger1.style.opacity='0'

}