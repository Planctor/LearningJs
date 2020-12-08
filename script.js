const menu = document.querySelectorAll('.link')

function scr(evento){
    evento.preventDefault()
    const linkar = evento.currentTarget.getAttribute('href')
    const link = document.querySelector(linkar)
    link.scrollIntoView({
        behavior: "smooth",
        block: "center" 
    })

}

menu.forEach((evento)=>{
    evento.addEventListener('click', scr)
})